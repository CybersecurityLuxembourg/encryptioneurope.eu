import React from "react";
import "./PageMember.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { NotificationManager as nm } from "react-notifications";
import { getRequest } from "../utils/request.jsx";
import Loading from "./box/Loading.jsx";
import Message from "./box/Message.jsx";
import Company from "./item/Company.jsx";
import { dictToURI } from "../utils/url.jsx";
import { getSettingValue } from "../utils/setting.jsx";

export default class PageMember extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			members: null,
			taxonomy: null,
		};
	}

	componentDidMount() {
		this.getPublicTaxonomy();
	}

	getPublicTaxonomy() {
		this.setState({
			taxonomy: null,
		}, () => {
			getRequest.call(this, "public/get_public_taxonomy", (data) => {
				this.setState({
					taxonomy: data,
				}, () => {
					this.getPublicMembers();
				});
			}, (response) => {
				nm.warning(response.statusText);
			}, (error) => {
				nm.error(error.message);
			});
		});
	}

	getPublicMembers() {
		this.setState({
			members: null,
		}, () => {
			const values = this.state.taxonomy.values
				.filter((v) => v.category === "ECOSYSTEM ROLE" && v.name === "MEMBER");

			if (values.length > 0) {
				const params = {
					taxonomy_values: values[0].id,
				};

				getRequest.call(this, "public/get_public_entities?" + dictToURI(params), (data) => {
					this.setState({
						members: data,
					});
				}, (response) => {
					nm.warning(response.statusText);
				}, (error) => {
					nm.error(error.message);
				});
			} else {
				this.setState({
					members: [],
				});
			}
		});
	}

	render() {
		return (
			<div className={"PageMember page max-sized-page"}>
				<div className="row">
					<div className="col-md-12">
						<Breadcrumb>
							{getSettingValue(this.props.settings, "PROJECT_NAME") !== null
								&& <Breadcrumb.Item>
									<Link to="/">{getSettingValue(this.props.settings, "PROJECT_NAME")}</Link>
								</Breadcrumb.Item>
							}
							<Breadcrumb.Item><Link to="/members">Members</Link></Breadcrumb.Item>
						</Breadcrumb>
					</div>
				</div>

				<div className="row">
					<div className="col-md-12">
						<h1>Members of Encryption Europe</h1>
					</div>
				</div>

				<div className="row row-spaced">
					<div className="col-md-12">
						Friends of Encryption Europe are any business, organisation,
						initiative, or individual who associates with us to champion
						encryption as a critical component of cybersecurity in Europe.
					</div>
				</div>

				<div className="row row-spaced">
					{this.state.members && this.state.members.length > 0
						&& this.state.members.map((m) => (
							<div
								className="col-md-6"
								key={m.id}>
								<Company
									info={m}
								/>
							</div>
						))
					}

					{this.state.members && this.state.members.length === 0
						&& <div className="col-md-12">
							<Message
								text={"No member found"}
								height={300}
							/>
						</div>
					}

					{!this.state.members
						&& <div className="col-md-12">
							<Loading
								height={300}
							/>
						</div>
					}
				</div>
			</div>
		);
	}
}
