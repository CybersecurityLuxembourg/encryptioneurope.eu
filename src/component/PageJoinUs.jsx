import React from "react";
import "./PageJoinUs.css";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Link } from "react-router-dom";
import { getSettingValue } from "../utils/setting.jsx";

export default class PageJoinUs extends React.Component {
	constructor(props) {
		super(props);

		this.render = this.render.bind(this);

		this.state = {
		};
	}

	// eslint-disable-next-line class-methods-use-this
	render() {
		return (
			<div className={"PageJoinUs page max-sized-page"}>
				<div className="row">
					<div className="col-md-12">
						<Breadcrumb>
							{getSettingValue(this.props.settings, "PROJECT_NAME") !== null
								&& <Breadcrumb.Item>
									<Link to="/">{getSettingValue(this.props.settings, "PROJECT_NAME")}</Link>
								</Breadcrumb.Item>
							}
							<Breadcrumb.Item><Link to="/join">Join us</Link></Breadcrumb.Item>
						</Breadcrumb>
					</div>
				</div>

				<div className="row row-spaced">
					<div className="col-md-12">
						<h1>Members of Encryption Europe</h1>

						<h2>What are the benefits of becoming a Member of Encryption Europe?</h2>

						<p>
							Since our establishment in 2019, Encryption Europe has quickly built
							trust and respect amongst European government institutions and industry
							leaders. These relationships are formed through our straightforward
							approach that emphasises cooperation over dogmatism, especially when
							recognising and realistically dealing with the challenges law enforcement face.
						</p>

						<p>
							By joining Encryption Europe, you:
						</p>

						<ul>
							<li>Stand out as a thought leader</li>
							<li>Are part of a solutions-based community</li>
							<li>Receive assistance in promoting you and your
							solutions through webinars and other activities</li>
							<li>Access to trusted institutions and prestigious forums</li>
							<li>A governing position in the alliance that drives
							policy strategy and direction</li>
							<li>Experts producing policy positions and initiatives on your behalf</li>
						</ul>

						<h2>Who can apply?</h2>

						<p>Encryption Europe is open to any company that wants to help promote
						encryption responsible practices and dispel myths about it being too
						complicated for the average user. Our principles are:</p>

						<ul>
							<li>No weak encryption</li>
							<li>No backdoors </li>
							<li>No key escrows</li>
						</ul>

						<h2>How to join?</h2>

						<p>Applying for membership is straightforward and begins with an
						expression of interest at: <a
							href="mailto:contact@encryptioneurope.eu">contact@encryptioneurope.eu</a></p>

						<p>From there, we will organise a call to get to know your company and
						establish a contact point and relationship. Typically, we work with a
						business&apos;s CEO, co-founder, CTO, or CMO to maintain flexibility and agility.</p>

						<p>After getting to know each other, you will provide us with a description
						of your company, a brief overview of your technology, and who will take on
						the role of the contact point. We will then seek approval from the other
						members in a soft peer review process. If you pass, you will officially
						be a member of Encryption Europe!</p>

						<h2>Membership fees</h2>

						<p>Encryption Europe seeks to work with SMEs that we believe will be future
						leaders in the European cybersecurity sphere! For this reason, our flat fee
						for annual membership is 2000€/year. As this does not cover our real
						costs, we sign additional sponsorships with members who can contribute
						more and work with them on issues relevant to their business interests.</p>

						<h1>Friends of Encryption Europe</h1>

						<h2>Benefits of Becoming a Friend</h2>

						<p>By becoming a Friend of Encryption Europe, you can be listed on our website
						as part of the EE community and display the EE logo on your materials. Not
						only does this increase your visibility, but it also signals that you are
						part of a solutions-based community. Friends of Encryption Europe will
						also have front-row seats to the activities of EE and its members, paving
						the way for full alliance membership in the future!</p>

						<h2>How to become a Friend of Encryption Europe</h2>

						<p>Becoming a Friend of Encryption Europe is an easy and informal
						process. Friends are not full members of the Encryption Europe
						alliance. Instead, they are responsible and respectable associates
						who believe in securing encryption as a critical component of
						European cybersecurity</p>

						<p>All you need to do to become a Friend of Encryption Europe is
						express your interest at: <a
							href="mailto:contact@encryptioneurope.eu">contact@encryptioneurope.eu</a></p>

						<p>Deregistering is done the same way and couldn&apos;t be easier!</p>
					</div>
				</div>
			</div>
		);
	}
}
