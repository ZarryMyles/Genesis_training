import React, { Fragment, useEffect } from "react";

import "./story1.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// images
import learningPathIMG from "../../../images/imgs/learning-path.png";
import clientServerImg from "../../../images/imgs/client-server.png";

export default function Story1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Router>
      <div id="story1-container" className="row mx-auto">
        <div id="story1-navbar" className="col-2">
          <Route component={navbar} />
        </div>
        <div id="story1-content" className="col-10">
          <header id="story1-header" className="text-center ">
            <h1>HTML FOR BEGINNERS</h1>
          </header>
          <div className="sections">
            <div id="requirements-section" className="section-block">
              <h2>Requirements</h2>
              <div className="content">
                <ul>
                  <li>
                    A browser , the one you are using currently to view this
                    :&#x00029;
                  </li>
                  <li>
                    A code editor ,{"  "}
                    <a href="https://code.visualstudio.com/Download">
                      VS Code{" "}
                    </a>{" "}
                    is prefered
                  </li>
                  <li>Install Live server, Prettifier extensions</li>
                </ul>
              </div>
            </div>
            <div id="Front-Back-end-section" className="section-block">
              <h2>Front-End and Back-end</h2>
              <div className="content">
                <ul className="ml-2">
                  {" "}
                  <li>
                    A front end deals with the "front" of a website or
                    application, meaning its design and coding that keep the
                    website working properly.{" "}
                  </li>
                  <li>
                    {" "}
                    The back end, however, refers to everything on the
                    server-side of a website or application, such as important
                    data. Here are some more differences between the front end
                    and back end.
                  </li>
                  <li>
                    A <span id="fullstack">full stack</span> developer is a
                    programmer who works within software development and is
                    knowledgeable in both the front-end and back-end of an
                    application.
                  </li>
                </ul>
                <h3>Front-End</h3>
                <div id="front-end-blocks">
                  <h4>HTML :</h4>
                  <p>
                    Its the structure of the website. Used to define the layout
                    of the webpage.
                  </p>
                  <h4>CSS :</h4>
                  <p>
                    To animate and style the layouts and contents like the font,
                    shape of a picture and so on.
                  </p>
                  <h4>JavaScript(JS) :</h4>
                  <p>
                    To add fucntionaility to the website, to make components
                    respond in a website , like increasing the no.of likes on
                    click of a button and displaying the information based on
                    user logged in. Unlike CSS and HTML this is a programming
                    language.
                  </p>
                </div>
              </div>
            </div>
            <div id="learning-path-section" className="section-block">
              <h2>Path For Learning Front-End </h2>
              <div className="content">
                <div id="block1">
                  <ul>
                    <li>Learn HTML and CSS</li>
                    <li>JavaScript</li>
                    <li>
                      Frameworks : Frameworks and libraries have reusable codes
                      to make the development faster and easier <br />
                      For example : reactJS, Angular, Vue
                    </li>
                  </ul>
                </div>
                <div id="block2" className="d-flex flex-row ml-5">
                  <img src={learningPathIMG} alt="" srcset="" />
                  <div id="version-control" className="p-5 mt-5">
                    <li>
                      Version Control System: These are used to keep track of
                      project history while working on it as a team with many
                      contributors or just you
                    </li>
                    <li className="mt-4">
                      Git is the most popular and the best version control
                      system
                    </li>
                  </div>
                </div>
              </div>
            </div>
            <div id="web-working" className="section-block">
              <h2>How the Web Works</h2>
              <div className="content">
                <p>
                  The web address entered in a browser is URL (Uniform resource
                  locator)
                  <br />
                  Such as{" "}
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                    https://www.youtube.com/watch?v=dQw4w9WgXcQ
                  </a>
                </p>
                <p className="ml-2">
                  As the name suggests it locates the resource, the resource
                  could be any of the folowing
                </p>
                <ul className="ml-3">
                  <li>Image</li>
                  <li>Video</li>
                  <li>Webpage</li>
                  <li>Fonts</li>
                </ul>
                <p className="ml-3">
                  When a url is entered in the browser it requests the resource
                  from the computer the url targets to
                </p>
                <p className="ml-3">
                  The browser is the <span className="text-light">client</span>{" "}
                  and the target computer is the{" "}
                  <span className="text-light">server</span> .
                </p>
                <div
                  id="client-server-model"
                  className="d-flex flex-row p-5 ml-3"
                >
                  <img src={clientServerImg} alt="" className="ml-5" />
                  <div id="clientserver-desc" className="ml-3 p-5 text-light">
                    <p>
                      The Client requests the server and the server provides the
                      resource the requests message is based on a protocol(HTTP
                      or HTTPS)
                    </p>
                    <p>
                      HTTPS is HTTP with encryption and hence is more secure. It
                      encrypts the messages exchanged between the client and
                      server.
                    </p>
                  </div>
                </div>
                <div id="HTTP-req" className="d-flex flex-row m-2">
                  <div id="code">
                    <h3 className="text-center">HTTP REQUEST MESSAGE</h3>
                    <div className="ml-5 p-3  codeblock">
                      GET /index.html HTTP/1.1 <br />
                      Host: www.sampleweb.com <br />
                      Accept-language: en-us
                    </div>
                  </div>
                  <div id="req-msg-desc" className="m-2 p-5">
                    Client is requesting to{" "}
                    <span className="text-light">GET</span> a page{" "}
                    <span className="text-light">INDEX.HTML</span> of the host{" "}
                    <span className="text-light">www.sampleweb.com</span> using{" "}
                    <span className="text-light">HTTP version 1.1</span> using
                    the{" "}
                    <span className="text-light">
                      client language english-US
                    </span>
                  </div>
                </div>
                <div id="HTTP-res" className="d-flex flex-row m-2">
                  <div id="code">
                    <h3 className="text-center">HTTP REQUEST MESSAGE</h3>
                    <div className="ml-5 p-3 codeblock">
                      HTTP/1.1 200 OK DATE: 1 JAN 2021 09:00 Content-Type:
                      text/html
                      <br />
                      <br />
                      &lt;!DOCTYPE html&gt;
                      <br /> &lt;html&gt;
                      <br /> <span className="pl-3">.....</span> <br />{" "}
                      &lt;/html&gt;
                    </div>
                  </div>
                  <div id="res-msg-desc" className="m-2 p-5">
                    Version of http used : 1.1 ,{" "}
                    <span className="text-light">status code (200 OK)</span>{" "}
                    which means successful <br />
                    Date and time of response :{" "}
                    <span className="text-light">1 Jan 2021 09:00</span> <br />
                    type of content server is sending to client :{" "}
                    <span className="text-light">text/html</span>
                    The requested resource , in this case its a html file .{" "}
                    <br />
                    This html file may contains links or urls to othr resources
                    such as web elements or images , once these resources are
                    requested and recieved the browser renders the webpage
                  </div>
                </div>
              </div>
            </div>
            <div id="HTML-basics" className="section-block">
              <h2>HTML BASICS</h2>
              <div className="content">
                <div id="html-basic-desc">
                  <h3>Follow these steps to make a new webpage :</h3>
                  <ol>
                    <li>
                      Create a new folder and open the folder on the code editor
                    </li>
                    <li>
                      Make a file with the extension of{" "}
                      <span className="text-light">.html</span> .
                      <br />
                      Make a file with the extension of{" "}
                      <span className="text-light">.css</span>
                    </li>
                    <li>
                      Use the live server extension which appears on the bottom
                      right, or right click and choose{" "}
                      <span className="text-light">go live</span>
                    </li>
                  </ol>
                  <p className="ml-5">
                    HTML is case sensitive. <br />
                    The body of the HTML file begins{" "}
                    <span className="text-light">&lt;!DOCTYPE html&gt;</span>
                    <br />
                    HTML has a <span className="text-light">head</span> and{" "}
                    <span className="text-light">body</span>
                    <br />
                    <ul className="ml-2">
                      <li>
                        Head gives browser the info of the page{" "}
                        <ul>
                          <li>title,styling files etcs</li>
                        </ul>
                      </li>
                      <li>
                        Body contains the layout and all the contents of the
                        website thats visible to the client or user.
                      </li>
                    </ul>
                    <br />
                    Most of the HTML tags have an opening and closing tag.
                    <br />
                    <span className="text-light ml-1">
                      &lt;tag_name&gt;content&lt;/tag_name&gt;
                    </span>
                    <br />
                    Some Elements dont have a closing tag, ex : &lt;img&gt;
                    <br />
                    Self closing tags can be used instead of such as some
                    frameworks dont support tags without a closing tag.
                    <br />
                    Example of self closing tags : &lt;/br&gt;, &lt;/img&gt;
                  </p>
                </div>
                <h3 className="ml-5">Basic HTML code: </h3>
                <div style={{ width: "30%" }} className="ml-5 p-3 codeblock">
                  &lt;!DOCTYPE html&gt; <br /> &lt;html lang="en"&gt;
                  <br /> &lt;head&gt;
                  <br />
                  &emsp; &lt;title&gt;Document&lt;/title&gt;
                  <br />
                  &lt;/head&gt;
                  <br /> &emsp;&emsp;&lt;body&gt;
                  <br />
                  &emsp;&emsp;&emsp;&lt;p&gt;Batman&lt;/p&gt;
                  <br />
                  &emsp;&emsp;&emsp;&lt;p&gt;Do you bleed?&lt;/p&gt; <br />
                  &emsp;&emsp;&lt;/body&gt;
                  <br /> &lt;/html&gt;
                  <br />
                </div>
              </div>
            </div>
            <div id="html-head" className="section-block">
              <h2>Head Tag </h2>
              <div className="content d-flex flex-row ">
                <div id="head-desc" className="m-2 mt-4 pr-2 ">
                  <ul>
                    <li>
                      <span className="text-light">charset</span> : Used to
                      define the character set used , UTF-8 Represents most of
                      the popluar formats
                    </li>
                    <li>
                      <span className="text-light">viewport</span> : The visible
                      area of the webpage
                    </li>
                    <li>
                      <span className="text-light">keywords</span> : For better
                      targeting of the webpage on searching on browsers
                    </li>
                    <li>
                      <span className="text-light">description</span> :
                      Description of the webpage is shown in the search result
                      page of a browser
                    </li>
                  </ul>
                </div>
                <div className="codeblock">
                  &lt;head&gt;
                  <br />
                  &emsp;&lt;meta charset="UTF-8"&gt;
                  <br />
                  &emsp;&lt;meta http-equiv="X-UA-Compatible"
                  content="IE=edge"&gt;
                  <br />
                  &emsp; &lt;meta name="viewport" content="width=device-width,
                  initial-scale=1.0"&gt;
                  <br />
                  &emsp; &lt;meta name="keywords" content="Learning
                  HTML,CSS"&gt;
                  <br />
                  &emsp; &lt;meta name="description" content="this appears on
                  the search engine results as description"&gt;
                  <br />
                  &emsp; &lt;title&gt;Document&lt;/title&gt;
                  <br />
                  &lt;/head&gt;
                </div>
              </div>
            </div>
            <div id="html-text" className="section-block">
              <h2>HTML Text Elements</h2>
              <div id="html-text-part1">
                <h3>Heading Elements</h3>
                <div className="content d-flex flex-row ">
                  <iframe
                    height="300"
                    style={{ width: "60%", margin: "auto" }}
                    scrolling="no"
                    title="eYgRwNb"
                    src="https://codepen.io/richinrix/embed/eYgRwNb?height=265&theme-id=dark&default-tab=html,result"
                    frameborder="no"
                    loading="lazy"
                    allowtransparency="true"
                    allowfullscreen="true"
                  >
                    See the Pen{" "}
                    <a href="https://codepen.io/richinrix/pen/eYgRwNb">
                      eYgRwNb
                    </a>{" "}
                    by Rix (
                    <a href="https://codepen.io/richinrix">@richinrix</a>) on{" "}
                    <a href="https://codepen.io">CodePen</a>.
                  </iframe>
                  <div id="heading-elements-desc" className="ml-2 mt-4 p-2">
                    <li className="pb-3">
                      There are 6 heading values and the size decreases from{" "}
                      <span className="text-light">H1</span> to{" "}
                      <span className="text-light">H6</span>.
                    </li>
                    <li>
                      Heading elemnts should be used based on hierarchial
                      importance and not based on size.{" "}
                    </li>
                  </div>
                </div>
              </div>
              <div id="html-text-part2" className="mt-4">
                <h3>Other Text Elements</h3>
                <div className="content row">
                  <div className="codeblock col-sm-4 ml-5">
                    <p>
                      &lt;p&gt;&lt;strong&gt;Batman&lt;/p&gt;&lt;/strong&gt;
                    </p>
                  </div>
                </div>
                <div id="othr-elem-desc">
                  <li>
                    <span className="text-light">&lt;p&gt;</span> is paragraph
                  </li>
                  <li>
                    <span className="text-light">&lt;strong&gt;</span> is used
                    for showing the importance of the text. By default the
                    styling is set to bold.
                  </li>
                  <li>
                    <span className="text-light">&lt;em&gt;</span> is
                    emphasizing. By default the styling is set to italics.
                  </li>
                  <li>
                    <span className="text-light">&lt;b&gt; and &lt;i&gt;</span>{" "}
                    is bold and italics but is adivised not to use as HTML
                    should be used for making the structure and laying out the
                    template and not styling.
                  </li>
                  <li>
                    {" "}
                    CSS styling can be used to change the defautl styling of the
                    elements
                  </li>
                </div>
              </div>
              <div id="html-text-part3" className="mt-4">
                <h3>Entities</h3>
                <div className="content">
                  <p>
                    To use symbols that have a default value in HTML as a text
                    we use entities.
                  </p>
                  <p>
                    Example : &lt;HTML&gt; cant be directly written inside a
                    paragraph or header tag or anyother tag as the brackets{" "}
                    <span className="text-light">&lt; , &gt;</span>
                    are read as tags.
                  </p>
                  <p>
                    {" "}
                    To use these brackets and other sympobls we use entities in
                    place of em.
                  </p>
                  <div>
                    <li className="ml-5">
                      <span className="text-light "> {"&lt;"}</span> is {"'"}
                      &lt;
                      {"'  "}
                      (lesser than )
                    </li>
                    <li className="ml-5">
                      <span className="text-light"> {"&gt;"}</span> is {"'"}
                      &gt;
                      {"'   "}
                      (greater than )
                    </li>
                  </div>
                  <p>
                    So to write &lt;HTML&gt; , you will have to write{" "}
                    <span className="text-light">{"&lt;HTML&gt; "}</span>
                  </p>
                  <a
                    className="ml-5"
                    href="https://dev.w3.org/html5/html-author/charref"
                  >
                    Click here
                  </a>{" "}
                  for the list of all the entities and the values.
                </div>
              </div>
              <div className="mt-4" id="html-text-part4">
                <h3>Hyperlinks</h3>
                <div className="content d-flex flex-row">
                  <div className="codeblock ml-5">
                    &lt;a href="./about.html"cabout&gt;&lt;/a&gt; <br />
                    &lt;a href="https://google.com"
                    target="_blank&gt;Google&lt;/a&gt;
                    <br />
                    &lt;a href="./images/img1" download&gt;download-img&lt;a&gt;
                  </div>
                  <div className="content ml-3">
                    <li>
                      By defualt the text wrapped in an anchor tag{" "}
                      <span className="text-light">&lt;a&gt;&lt;/a&gt;</span> is
                      set to blue color and is underlined. The mouse pointer
                      changes whne you hover over it.
                    </li>
                    <li>
                      You can wrap an image tag with an anchor element to link
                      the image to an hyperlink
                    </li>
                    <li>
                      You can use "id" in the place of hyperlink to make the
                      page move to the portion of HTML with the
                      id="that_element" on click of the anchor elemnt too. Use :
                      href="#id_name"{" "}
                    </li>
                    <li>
                      On using href="#" , on click the webpage goes to begining
                      of the webpage{" "}
                    </li>
                    <li>
                      target="_blank" attribute can be added to make the
                      hyperlink open a new tab
                    </li>
                    <li>
                      href+"mailto:your_mailid@mail.com" can be used to open the
                      mail client with the send address as the given address.
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

const navbar = () => (
  <Fragment>
    <h3 className="text-white text-center"> Navigation </h3>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link " href="#requirements-section">
          Requirements
        </a>
      </li>
      <li class="nav-item ">
        <a class="nav-link " href="#Front-Back-end-section">
          Front End and Back End
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#learning-path-section">
          Learning Path
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#web-working">
          How the Web Works
        </a>
      </li>
    </ul>
  </Fragment>
);
