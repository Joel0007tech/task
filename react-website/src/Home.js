import React from "react";
const ListStyling = {
  listStyle: "none",
  display: "flex",
};

const LinkStyling = {
  fontFamily: "Hanken Grotesk, sans-serif",
  textDecoration: "none",
  fontWeight: "700",
  color: "black",
};

function MouseOver() {
  document.getElementById("home").style.border = "3px solid orange";
  document.getElementById("home").style.paddingTop = "10px";
  document.getElementById("home").style.paddingBottom = "10px";
  document.getElementById("home").style.borderTop = "none";
  document.getElementById("home").style.borderRight = "none";
  document.getElementById("home").style.borderLeft = "none";
}

function MouseLeave() {
  document.getElementById("home").style.border = null;
  document.getElementById("home").style.paddingTop = null;
  document.getElementById("home").style.paddingBottom = null;
  document.getElementById("home").style.borderTop = null;
  document.getElementById("home").style.borderRight = null;
  document.getElementById("home").style.borderLeft = null;
}

function MouseOverBlog() {
  document.getElementById("blog").style.border = "3px solid orange";
  document.getElementById("blog").style.paddingTop = "10px";
  document.getElementById("blog").style.paddingBottom = "10px";
  document.getElementById("blog").style.borderTop = "none";
  document.getElementById("blog").style.borderRight = "none";
  document.getElementById("blog").style.borderLeft = "none";
}

function MouseLeaveBlog() {
  document.getElementById("blog").style.border = null;
  document.getElementById("blog").style.paddingTop = null;
  document.getElementById("blog").style.paddingBottom = null;
  document.getElementById("blog").style.borderTop = null;
  document.getElementById("blog").style.borderRight = null;
  document.getElementById("blog").style.borderLeft = null;
}

function MouseOverAbout() {
  document.getElementById("about").style.border = "3px solid orange";
  document.getElementById("about").style.paddingTop = "10px";
  document.getElementById("about").style.paddingBottom = "10px";
  document.getElementById("about").style.borderTop = "none";
  document.getElementById("about").style.borderRight = "none";
  document.getElementById("about").style.borderLeft = "none";
}

function MouseLeaveAbout() {
  document.getElementById("about").style.border = null;
  document.getElementById("about").style.paddingTop = null;
  document.getElementById("about").style.paddingBottom = null;
  document.getElementById("about").style.borderTop = null;
  document.getElementById("about").style.borderRight = null;
  document.getElementById("about").style.borderLeft = null;
}

function MouseOverContact() {
  document.getElementById("contact").style.border = "3px solid orange";
  document.getElementById("contact").style.paddingTop = "10px";
  document.getElementById("contact").style.paddingBottom = "10px";
  document.getElementById("contact").style.borderTop = "none";
  document.getElementById("contact").style.borderRight = "none";
  document.getElementById("contact").style.borderLeft = "none";
}

function MouseLeaveContact() {
  document.getElementById("contact").style.border = null;
  document.getElementById("contact").style.paddingTop = null;
  document.getElementById("contact").style.paddingBottom = null;
  document.getElementById("contact").style.borderTop = null;
  document.getElementById("contact").style.borderRight = null;
  document.getElementById("contact").style.borderLeft = null;
}

function Home() {
  return (
    <div>
      <header>
        <nav>
          <ul style={ListStyling}>
            <li>
              <a
                href=""
                style={LinkStyling}
                id="home"
                onMouseOver={MouseOver}
                onMouseLeave={MouseLeave}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                style={LinkStyling}
                id="blog"
                onMouseOver={MouseOverBlog}
                onMouseLeave={MouseLeaveBlog}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href=""
                style={LinkStyling}
                id="about"
                onMouseOver={MouseOverAbout}
                onMouseLeave={MouseLeaveAbout}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href=""
                style={LinkStyling}
                id="contact"
                onMouseOver={MouseOverContact}
                onMouseLeave={MouseLeaveContact}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
