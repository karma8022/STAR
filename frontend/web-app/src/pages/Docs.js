import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
const Contact = () => {
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

			<div className="m-4 p-16 text-3xl bg-base-200 rounded-xl mx-10 flex flex-col">
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					1. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					2. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
				<a
					href="https://standards.nasa.gov/all-standards"
					className="underline m-4"
				>
					3. NASA Standards
				</a>
			</div>
		</div>
	);
};

export default Contact;
