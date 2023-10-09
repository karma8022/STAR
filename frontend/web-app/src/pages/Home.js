import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { BaseUrlContext } from "../context/BaseUrlContext";
import axios from "axios";
import UserEmailContext from "../context/UserEmailContext";

const Home = () => {
  const [userQuery, setuserQuery] = useState("");
  const [responseAnswer, setresponseAnswer] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [responseSections, setresponseSections] = useState([]);
  const [responseReferences, setResponseReferences] = useState("");
  const [responseSummary, setresponseSummary] = useState("");

  // const [userName] = React.useContext(UserEmailContext).userEmail;
  const base_url = React.useContext(BaseUrlContext).baseUrl;
  const getResponses_topic_1 = async () => {
    const params = {
      query: userQuery,
    };

    axios
      .get(`${base_url}/query/nasa/`, { params })
      .then((response) => {
        console.log(response.data);
        setresponseAnswer(response.data.answers);
        setresponseSections(response.data.sections);
        setResponseReferences(response.data.references);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  const getResponses_topic_2 = async () => {
    const params = {
      query: userQuery,
    };

    axios
      .get(`${base_url}/query/bulletin/`, { params })
      .then((response) => {
        console.log(response.data);
        setresponseAnswer(response.data.answers);
        setresponseSections(response.data.sections);
        setResponseReferences(response.data.references);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  const getResponses_topic_3 = async () => {
    const params = {
      query: userQuery,
    };

    axios
      .get(`${base_url}/query/spacetech/`, { params })
      .then((response) => {
        console.log(response.data);
        setresponseAnswer(response.data.answers);
        setresponseSections(response.data.sections);
        setResponseReferences(response.data.references);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };
  const getResponses_topic_4 = async () => {
    const params = {
      query: userQuery,
    };

    axios
      .get(`${base_url}/query/standards/`, { params })
      .then((response) => {
        console.log(response.data);
        setresponseAnswer(response.data.answers);
        setresponseSections(response.data.sections);
        setResponseReferences(response.data.references);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  return (
    <body className="text-white">
      <div className="" id="bgbg">
        <div className="flex justify-center items-center mt-16">
          <div className="collapse collapse-arrow bg-base-200 w-3/4">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium text-3xl background-with-opacity">
              <div className="flex  items-center 	">
                How to Use this Page{"   "}
                <QuestionMarkCircleIcon className="w-8 h-8 inline mx-4" />
              </div>
            </div>
            <div className="collapse-content text-2xl background-with-opacity2">
              <p>
                You are requested to send a query related to one of the topics
                mentioned below. Keep the query relevant to the topic you have
                chosen.
              </p>
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

                // show the current one
                document
                  .getElementById("major_projects")
                  .classList.remove("hidden");
              }}
            >
              {" "}
              NASA 5018
            </div>
            <div
              className="text-xl tab"
              onClick={(e) => {
                setButtonClicked(false);
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

                // show the current one
                document
                  .getElementById("mlds_projects")
                  .classList.remove("hidden");
              }}
            >
              NASA Bulletin
            </div>
            <div
              className="text-xl tab"
              onClick={(e) => {
                setButtonClicked(false);
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

                // show the current one
                document
                  .getElementById("app_dev_projects")
                  .classList.remove("hidden");
              }}
            >
              NASA Standard
            </div>
            <div
              className="text-xl tab"
              onClick={(e) => {
                setButtonClicked(false);
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

                // show the current one
                document
                  .getElementById("web_dev_projects")
                  .classList.remove("hidden");
              }}
            >
              NASA STI
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
        <div
          id="major_projects"
          className="p-8 bg-base-300 m-8 background-with-opacity rounded-xl"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4 text-white"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start ">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu bg-gray-500 rounded-xl  text-2xl background-with-opacity ml-4 my-4"
            onClick={() => {
              getResponses_topic_1();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start"> </div>
          <div className="flex justify-start flex-col gap-4">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          id="mlds_projects"
          className="hidden p-8 bg-base-300 m-8 background-with-opacity rounded-xl"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu  bg-gray-500 rounded-xl m-4 text-2xl background-with-opacity"
            onClick={() => {
              getResponses_topic_2();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start flex-col gap-4">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          id="app_dev_projects"
          className="hidden p-8 bg-base-300 m-8 background-with-opacity rounded-xl"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu  bg-gray-500 rounded-xl m-4 text-2xl background-with-opacity"
            onClick={() => {
              getResponses_topic_3();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start flex-col gap-4">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          id="web_dev_projects"
          className="hidden p-8 bg-base-300 m-8 background-with-opacity rounded-xl"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu  bg-gray-500 rounded-xl m-4 text-2xl background-with-opacity"
            onClick={() => {
              getResponses_topic_4();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start flex-col gap-4">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          id="game_dev_projects"
          className="hidden p-8 bg-base-300 m-8 background-with-opacity"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu  bg-gray-600 rounded-xl m-4 text-2xl background-with-opacity"
            onClick={() => {
              getResponses_topic_4();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start flex-col gap-4">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4 background-with-opacity5">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div
          id="web_dev_projects"
          className="hidden p-8 bg-base-300 m-8 background-with-opacity"
        >
          <div className="flex justify-start">
            {" "}
            <div className="text-4xl text-left p-4"> Question </div>
          </div>

          {/* <ProjectSection
					ordered_projects={ordered_projects_major}
					svg_name={"majorssvg"}
				/> */}
          <div className="flex flex-col justify-between w-full items-start">
            <span className=" text-2xl m-4 label-text text-left w-2/3">
              What is your Query?
            </span>
            <input
              type="text"
              placeholder="Enter Identifier"
              value={userQuery}
              onChange={(e) => {
                setuserQuery(e.target.value);
              }}
              className="input input-bordered input-lg w-full max-w-md m-2"
            />
          </div>

          <button
            className="btn-yasu  bg-gray-500 rounded-xl m-4 text-2xl background-with-opacity"
            onClick={() => {
              getResponses_topic_4();
              setButtonClicked(true);
            }}
          >
            {" "}
            Ask!
          </button>

          <div className="flex justify-start flex-col gap-4 ">
            {" "}
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Sections Referred
            </div>
            <div className="gap-2 mx-4 background-with-opacity5">
              {responseSections.length > 0 ? (
                responseSections.map((thing) => {
                  return (
                    <div className="mx-4 badge badge-primary p-4 text-2xl background-with-opacity5">
                      {thing}
                    </div>
                  );
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              Response
            </div>
            <div className="text-2xl mx-4 background-with-opacity5">
              {responseAnswer ? (
                responseAnswer.map((thing) => {
                  return <div className="my-4">{thing}</div>;
                })
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
            <div className="text-3xl text-left mx-4 outline w-fit outline-1 rounded-lg p-2 background-with-opacity5">
              {" "}
              References
            </div>
            <div className="text-2xl mx-4">
              {responseReferences.length > 0 ? (
                responseReferences
              ) : buttonClicked ? (
                <span className="loading loading-infinity loading-lg"></span>
              ) : null}
            </div>
          </div>
        </div>
        <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    </body>
  );
};

export default Home;
