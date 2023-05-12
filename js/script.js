const changeActiveTab = (i, j) => {
  let tabs = document.querySelectorAll(".info .tab");
  tabs = [...tabs];
  tabs.map((e, idx) => {
    if (idx == i) e.classList.add("activeTab");
    else e.classList.remove("activeTab");
  });
  if (j === "notice") {
    document.getElementById("announcement").classList.add("hidden");
    document.getElementById("notice").classList.remove("hidden");
  }
  if (j === "announcement") {
    document.getElementById("announcement").classList.remove("hidden");
    document.getElementById("notice").classList.add("hidden");
  }
};

const switchService = (i, j) => {
  let tabs = document.querySelectorAll(".btns .tab");
  tabs = [...tabs];
  tabs.map((e, idx) => {
    if (idx == i) e.classList.add("activeTab");
    else e.classList.remove("activeTab");
  });
  if (j === "studentServices") {
    document.getElementById("teacherServices").classList.add("hidden");
    document.getElementById("studentServices").classList.remove("hidden");
  }
  if (j === "teacherServices") {
    document.getElementById("teacherServices").classList.remove("hidden");
    document.getElementById("studentServices").classList.add("hidden");
  }
};

var scroller = document.getElementById("info");
var scroller_height = scroller.clientHeight;
var qbox_height = document.getElementById("scroller").scrollHeight;

function scrollForever(p_top) {
  var move_distance = 1;
  var new_top = p_top - move_distance;
  scroller.style.top = "" + p_top + "px";
  console.log(scroller_height, qbox_height, new_top);
  if (scroller_height + (new_top - qbox_height) >= 0) {
    setTimeout(function () {
      scrollForever(new_top);
    }, 50);
  } else {
    setTimeout(function () {
      scrollBack(new_top);
    }, 1000);
  }
}
function scrollBack(p_top) {
  console.log(scroller_height, qbox_height);
  var move_distance = 1;
  if (p_top < 0) {
    p_top = p_top + move_distance;
    scroller.style.top = "" + p_top + "px";
    setTimeout(function () {
      scrollBack(p_top);
    }, 50);
  } else {
    scroller.style.top = "0px";
    setTimeout(function () {
      scrollForever(0);
    }, 1000);
  }
}

const noticeTemplate = (title) => `<li>
							<div class="title">
								${title}
							</div>
							<div class="desc">
								Amet corrupti excepturi soluta porro nemo Repellendus id a aperiam nesciunt placeat Beatae exercitationem id obcaecati debitis itaque Eligendi officia aut impedit voluptatibus quis? Voluptatem maiores suscipit optio natus dicta.
							</div>
							<div class="more">
								<button>read more</button>
							</div>
						</li>`;

const toggleDrawer = () => {
  document.getElementById("drawer").classList.toggle("hidden");
};

onload = () => {
  for (let i = 1; i <= 10; i++) {
    document.getElementById("noticeList").innerHTML += noticeTemplate(
      "Sample Notice " + i
    );
    document.getElementById("announcementList").innerHTML += noticeTemplate(
      "Sample Announcement " + i
    );
  }
  for (let i = 0; i < 16; i++) {
    document.getElementById(
      "studentServices"
    ).innerHTML += `<span><img src="https://source.unsplash.com/random?q=avatar"/><p>Services</p></span>`;
    document.getElementById(
      "teacherServices"
    ).innerHTML += `<span><img src="https://source.unsplash.com/random?q=avatar"/><p>Services</p></span>`;
  }

  //setTimeout(() => {scrollForever(0)}, 3000)
};
