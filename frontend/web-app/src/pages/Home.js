import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const Projects = () => {
	const [userQuery, setuserQuery] = useState("");
	return (
		<div className="">
			<div className="flex justify-center items-center mt-16">
				<div className="collapse collapse-arrow bg-base-200 w-3/4">
					<input type="radio" name="my-accordion-2" />
					<div className="collapse-title text-xl font-medium text-3xl">
						<div className="flex  items-center">
							How to Use this Page{"   "}
							<QuestionMarkCircleIcon className="w-8 h-8 inline mx-4" />
						</div>
					</div>
					<div className="collapse-content text-2xl">
						<p>hello</p>
					</div>
				</div>
			</div>

			{/* Projects section */}
			<div>
				<div className="text-5xl text-center p-4">Query LLM</div>
				<div className="text-3xl break-words p-4 text-center">
					Choose one of the topics below to query.
				</div>
			</div>
			<div className="flex flex-col items-center justify-center">
				<div
					className="tabs tabs-boxed tabs-lg m-4 p-2 transform-gpu duration-200 text-center snap-center flex justify-center flex-wrap"
					id="thetabs"
				>
					<div
						className="text-xl tab tab-active"
						onClick={(e) => {
							// scroll to the element
							const current_tab_section =
								document.getElementById("major_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// make this tab active
							document
								.getElementById("thetabs")
								.children[0].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("major_projects")
								.classList.remove("hidden");
						}}
					>
						{" "}
						Major
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[1].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("mlds_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("major_projects")
								.classList.add("hidden");
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("mlds_projects")
								.classList.remove("hidden");
						}}
					>
						ML & DS
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[2].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("app_dev_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("major_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("app_dev_projects")
								.classList.remove("hidden");
						}}
					>
						PC & Mobile Apps
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[3].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[4].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("web_dev_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("major_projects")
								.classList.add("hidden");
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("game_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("web_dev_projects")
								.classList.remove("hidden");
						}}
					>
						Web Dev
					</div>
					<div
						className="text-xl tab"
						onClick={(e) => {
							// make this tab active
							document
								.getElementById("thetabs")
								.children[4].classList.add("tab-active");
							document
								.getElementById("thetabs")
								.children[3].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[1].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[0].classList.remove("tab-active");
							document
								.getElementById("thetabs")
								.children[2].classList.remove("tab-active");

							// scroll to the element
							const current_tab_section =
								document.getElementById("game_dev_projects");
							current_tab_section.scrollIntoView({
								behavior: "smooth",
							});

							// hide the others
							document
								.getElementById("mlds_projects")
								.classList.add("hidden");
							document
								.getElementById("major_projects")
								.classList.add("hidden");
							document
								.getElementById("app_dev_projects")
								.classList.add("hidden");
							document
								.getElementById("web_dev_projects")
								.classList.add("hidden");

							// show the current one
							document
								.getElementById("game_dev_projects")
								.classList.remove("hidden");
						}}
					>
						Game Dev
					</div>
				</div>
			</div>
			<div className="toast toast-bottom toast-center duration-300 transform-gpu ease-in-out hidden">
				<div className="alert alert-success">
					<span className="flex items-center gap-4 text-2xl">
						<CheckBadgeIcon className="w-10 h-10" />
						Copied to Clipboard!
					</span>
				</div>
			</div>

			{/* sections */}
			<div id="major_projects" className="p-8 bg-base-200 m-8">
				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Question </div>
				</div>

				{/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
				<div className="flex flex-col justify-between w-full items-start">
					<span className=" text-3xl m-4 label-text text-left w-2/3">
						What is your Query?
					</span>
					<input
						type="text"
						placeholder="Enter Identifier"
						value={userQuery}
						onChange={(e) => {
							setuserQuery(e.target.value);
						}}
						className="input input-bordered input-lg w-full max-w-xs m-2"
					/>
				</div>

				<button className="btn-lg btn-secondary rounded-xl m-4 text-2xl">
					{" "}
					Ask!
				</button>

				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Response</div>
				</div>
				<div className="flex justify-start flex-col gap-4">
					{" "}
					<div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2">
						{" "}
						Sections Referred
					</div>
					<div className="gap-2 my-3">
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
					</div>
				</div>
			</div>
			<div id="mlds_projects" className="hidden p-8 bg-secondary m-8">
				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Question </div>
				</div>

				{/* <ProjectSection
					ordered_projects={ordered_projects_mlds}
					svg_name={"mldssvg"}
				/> */}
				<div className="flex flex-col justify-between w-full items-start">
					<span className=" text-3xl m-4 label-text text-left w-2/3">
						What is your Query?
					</span>
					<input
						type="text"
						placeholder="Enter Identifier"
						value={userQuery}
						onChange={(e) => {
							setuserQuery(e.target.value);
						}}
						className="input input-bordered input-lg w-full max-w-xs m-2"
					/>
				</div>

				<button className="btn-lg btn-secondary rounded-xl m-4 text-2xl">
					{" "}
					Ask!
				</button>

				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Response</div>
				</div>
				<div className="flex justify-start flex-col gap-4">
					{" "}
					<div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2">
						{" "}
						Sections Referred
					</div>
					<div className="gap-2 my-3">
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
					</div>
				</div>
			</div>
			<div id="app_dev_projects" className="hidden p-8 bg-base-300 m-8">
				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Question </div>
				</div>

				{/* <ProjectSection
					ordered_projects={ordered_projects_app}
					svg_name={"app"}
				/> */}
				<div className="flex flex-col justify-between w-full items-start">
					<span className=" text-3xl m-4 label-text text-left w-2/3">
						What is your Query?
					</span>
					<input
						type="text"
						placeholder="Enter Identifier"
						value={userQuery}
						onChange={(e) => {
							setuserQuery(e.target.value);
						}}
						className="input input-bordered input-lg w-full max-w-xs m-2"
					/>
				</div>

				<button className="btn-lg btn-secondary rounded-xl m-4 text-2xl">
					{" "}
					Ask!
				</button>

				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Response</div>
				</div>
				<div className="flex justify-start flex-col gap-4">
					{" "}
					<div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2">
						{" "}
						Sections Referred
					</div>
					<div className="gap-2 my-3">
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
					</div>
				</div>
			</div>
			<div id="web_dev_projects" className="hidden p-8 bg-purple-300 m-8">
				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Question </div>
				</div>

				{/* <ProjectSection
					ordered_projects={ordered_projects_web}
					svg_name={"devsvg"}
				/> */}
				<div className="flex flex-col justify-between w-full items-start">
					<span className=" text-3xl m-4 label-text text-left w-2/3">
						What is your Query?
					</span>
					<input
						type="text"
						placeholder="Enter Identifier"
						value={userQuery}
						onChange={(e) => {
							setuserQuery(e.target.value);
						}}
						className="input input-bordered input-lg w-full max-w-xs m-2"
					/>
				</div>

				<button className="btn-lg btn-secondary rounded-xl m-4 text-2xl">
					{" "}
					Ask!
				</button>

				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Response</div>
				</div>
				<div className="flex justify-start flex-col gap-4">
					{" "}
					<div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2">
						{" "}
						Sections Referred
					</div>
					<div className="gap-2 my-3">
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
					</div>
				</div>
			</div>
			<div id="game_dev_projects" className="hidden p-8 bg-rose-300 m-8">
				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Question </div>
				</div>

				{/* <ProjectSection
					ordered_projects={ordered_projects_game}
					svg_name={"devsvg"}
				/> */}
				<div className="flex flex-col justify-between w-full items-start">
					<span className=" text-3xl m-4 label-text text-left w-2/3">
						What is your Query?
					</span>
					<input
						type="text"
						placeholder="Enter Identifier"
						value={userQuery}
						onChange={(e) => {
							setuserQuery(e.target.value);
						}}
						className="input input-bordered input-lg w-full max-w-xs m-2"
					/>
				</div>

				<button className="btn-lg btn-secondary rounded-xl m-4 text-2xl">
					{" "}
					Ask!
				</button>

				<div className="flex justify-start">
					{" "}
					<div className="text-4xl text-left p-4"> Response</div>
				</div>

				<div className="flex justify-start flex-col gap-4">
					{" "}
					<div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2">
						{" "}
						Sections Referred
					</div>
					<div className="gap-2 my-3">
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
						<div className="mx-4 badge badge-primary p-4 text-2xl">
							accent
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
