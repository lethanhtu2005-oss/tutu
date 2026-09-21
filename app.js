const app = document.querySelector("#app");
const modalRoot = document.querySelector("#modalRoot");
const toastEl = document.querySelector("#toast");

const data = [
  {id:"g1",cat:"Điểm đến",name:"Hồ Gươm & Cầu Thê Húc",area:"Hoàn Kiếm",status:"Dễ tiếp cận",level:"easy",icon:"🌉",
   desc:"Lối đi ven hồ bằng phẳng, có ghế nghỉ và nhiều người qua lại.",
   tags:["staff","navigation","stepfree"], price:"Miễn phí",
   access:[["Lối vào không bậc","Có","yes"],["Đường đi dễ định hướng","Có","yes"],["Hỗ trợ nhân viên/HDV","Có theo yêu cầu","yes"],["Thuyết minh âm thanh","Có","yes"],["Ghế nghỉ","Có","yes"],["Không gian yên tĩnh","Một số khu vực","yes"]]},
  {id:"g2",cat:"Điểm đến",name:"Văn Miếu – Quốc Tử Giám",area:"Đống Đa",status:"Tiếp cận trung bình",level:"medium",icon:"🏛️",
   desc:"Không gian yên tĩnh, có thuyết minh âm thanh; một số đoạn cần hỗ trợ.",
   tags:["audio","staff","navigation"], price:"30.000đ",
   access:[["Lối vào không bậc","Một số khu vực","yes"],["Đường đi dễ định hướng","Cần hỗ trợ","yes"],["Hỗ trợ nhân viên/HDV","Có","yes"],["Thuyết minh âm thanh","Có","yes"],["Ghế nghỉ","Có","yes"],["Không gian yên tĩnh","Có","yes"]]},
  {id:"g3",cat:"Điểm đến",name:"Phố cổ & Phố tàu hỏa",area:"Hoàn Kiếm",status:"Cần hỗ trợ",level:"help",icon:"🚋",
   desc:"Nhiều âm thanh, người và xe; nên đi cùng HDV hoặc dùng chỉ đường giọng nói.",
   tags:["staff","navigation"], price:"Miễn phí",
   access:[["Lối vào không bậc","Không ổn định","yes"],["Đường đi dễ định hướng","Khó","no"],["Hỗ trợ nhân viên/HDV","Có thể đặt","yes"],["Thuyết minh âm thanh","Qua WayEcho","yes"],["Ghế nghỉ","Có tại điểm nghỉ","yes"],["Không gian yên tĩnh","Không","no"]]},
  {id:"g4",cat:"Điểm đến",name:"Hồ Tây & làng ven hồ",area:"Tây Hồ",status:"Dễ tiếp cận",level:"easy",icon:"🌊",
   desc:"Đường dạo rộng, ít dốc và có nhiều không gian nghỉ.",
   tags:["navigation","stepfree"], price:"Miễn phí",
   access:[["Lối vào không bậc","Có","yes"],["Đường đi dễ định hướng","Khá tốt","yes"],["Hỗ trợ nhân viên/HDV","Có theo yêu cầu","yes"],["Thuyết minh âm thanh","Qua WayEcho","yes"],["Ghế nghỉ","Có","yes"],["Không gian yên tĩnh","Tùy thời điểm","yes"]]},
  {id:"h1",cat:"Lưu trú",name:"Hanoi Riverside Hotel",area:"Hoàn Kiếm",status:"Dễ tiếp cận",level:"easy",icon:"🏨",
   desc:"Có nhân viên hỗ trợ check-in, hướng dẫn phòng và thang máy.",
   tags:["staff","stepfree","navigation"], price:"Từ 850.000đ/đêm",
   access:[["Check-in có hỗ trợ","Có","yes"],["Hướng dẫn tới phòng","Có","yes"],["Thang máy","Có","yes"],["Hỗ trợ hành lý","Có","yes"],["Thông tin âm thanh","Theo yêu cầu","yes"],["Phòng dễ tìm","Có chỉ dẫn","yes"]]},
  {id:"f1",cat:"Ăn uống",name:"Phở Gia Truyền",area:"Hoàn Kiếm",status:"Tiếp cận trung bình",level:"medium",icon:"🍜",
   desc:"Có nhân viên hỗ trợ gọi món và đưa khách tới bàn; quán đông vào giờ cao điểm.",
   tags:["staff","navigation"], price:"100.000đ/người",
   access:[["Nhân viên đưa tới bàn","Có","yes"],["Menu đọc bằng màn hình","Có bản điện tử","yes"],["Lối vào dễ tiếp cận","Có","yes"],["Bàn dễ tìm","Có hỗ trợ","yes"],["Không gian yên tĩnh","Giờ thấp điểm","yes"]]},
  {id:"a1",cat:"Hoạt động",name:"Workshop làm gốm Bát Tràng",area:"Gia Lâm",status:"Dễ tiếp cận",level:"easy",icon:"🏺",
   desc:"Có hướng dẫn viên, hỗ trợ xúc giác và có thể đặt trước hỗ trợ riêng.",
   tags:["staff","audio","stepfree"], price:"250.000đ/người",
   access:[["Hướng dẫn viên","Có","yes"],["Mô tả âm thanh","Có","yes"],["Hỗ trợ xúc giác","Có","yes"],["Lối vào không bậc","Có","yes"],["Đặt hỗ trợ trước","Có","yes"],["Khung giờ linh hoạt","Có","yes"]]},
  {id:"t1",cat:"Vé",name:"Vé tham quan Văn Miếu",area:"Đống Đa",status:"Dễ tiếp cận",level:"easy",icon:"🎟️",
   desc:"Có e-ticket, hỗ trợ tại cổng và có thể đăng ký hỗ trợ khi đặt.",
   tags:["staff","audio"], price:"30.000đ/vé",
   access:[["E-ticket","Có","yes"],["Hỗ trợ tại cổng","Có","yes"],["Quầy vé hỗ trợ","Có","yes"],["Audio guide","Có","yes"],["Đăng ký hỗ trợ","Có","yes"]]},
  {id:"m1",cat:"Di chuyển",name:"WayEcho Ride — xe hỗ trợ",area:"Hà Nội",status:"Dễ tiếp cận",level:"easy",icon:"🚕",
   desc:"Xe riêng có tài xế hỗ trợ lên/xuống, điểm đón rõ ràng và liên hệ tài xế.",
   tags:["staff","navigation"], price:"Từ 120.000đ/chuyến",
   access:[["Hỗ trợ lên/xuống","Có","yes"],["Điểm đón rõ ràng","Có","yes"],["Tài xế liên hệ trực tiếp","Có","yes"],["Theo dõi chuyến","Có","yes"],["Đón tại sảnh khách sạn","Có","yes"]]}
];

const categoryFilters = {
  "Điểm đến":["Audio guide / thuyết minh âm thanh","HDV hoặc nhân viên hỗ trợ","Chỉ đường dễ định hướng","Lối vào không bậc","Có ghế nghỉ","Không gian yên tĩnh"],
  "Lưu trú":["Check-in có hỗ trợ","Hướng dẫn tới phòng","Hỗ trợ hành lý","Thông tin âm thanh","Thang máy","Phòng dễ tìm"],
  "Ăn uống":["Nhân viên đưa tới bàn/gọi món","Menu điện tử đọc được","Menu Braille / chữ lớn","Lối vào dễ tiếp cận","Bàn dễ tìm","Không gian yên tĩnh"],
  "Hoạt động":["Hướng dẫn viên","Mô tả âm thanh","Hỗ trợ xúc giác","Hỗ trợ di chuyển","Đặt hỗ trợ trước","Khung giờ linh hoạt"],
  "Vé":["Audio guide","Hỗ trợ tại cổng","Quầy vé hỗ trợ","Đăng ký hỗ trợ","E-ticket"],
  "Di chuyển":["Xe riêng / shuttle / taxi","Tài xế hỗ trợ lên xuống","Điểm đón rõ ràng","Đón tại sảnh","Theo dõi chuyến","Liên hệ tài xế"]
};

let state = {
  page:"home", cat:"Điểm đến", query:"", filters:[], onlyFit:false,
  profile:new Set(["staff","audio","navigation","stepfree"]),
  bookings: JSON.parse(localStorage.getItem("wayechoBookings") || "[]"),
  trips: JSON.parse(localStorage.getItem("wayechoTrips") || "[]")
};

function save(){
  localStorage.setItem("wayechoBookings", JSON.stringify(state.bookings));
  localStorage.setItem("wayechoTrips", JSON.stringify(state.trips));
  document.querySelector("#bookingCount").textContent = state.bookings.length;
  document.querySelector("#bookingCount").classList.toggle("hidden", !state.bookings.length);
}

function toast(msg){
  toastEl.textContent=msg; toastEl.classList.add("show");
  clearTimeout(window.__toast); window.__toast=setTimeout(()=>toastEl.classList.remove("show"),2600);
}

function speak(text){
  if(!("speechSynthesis" in window)){toast("Trình duyệt này chưa hỗ trợ đọc văn bản.");return}
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text); u.lang="vi-VN"; u.rate=.95;
  speechSynthesis.speak(u); toast("WayEcho đang đọc nội dung.");
}

function navigate(page){
  state.page=page; render(); window.scrollTo({top:0,behavior:"smooth"});
}

document.addEventListener("click",e=>{
  const p=e.target.closest("[data-page]");
  if(p){navigate(p.dataset.page);return}
  const d=e.target.closest("[data-detail]");
  if(d){openDetail(d.dataset.detail);return}
  const b=e.target.closest("[data-book]");
  if(b){openBooking(b.dataset.book);return}
  const s=e.target.closest("[data-speak]");
  if(s){speak(s.dataset.speak);return}
  const c=e.target.closest("[data-cat]");
  if(c){state.cat=c.dataset.cat;state.page="explore";state.filters=[];render();return}
});

document.querySelector("#profileOpen").addEventListener("click",openProfile);

function home(){
  return `<div class="container">
    <section class="hero">
      <div>
        <div class="eyebrow">Thiết kế cho người khiếm thị</div>
        <h1>Du lịch Hà Nội,<br>dẫn lối bằng giọng nói.</h1>
        <p class="lead">WayEcho giúp bạn tìm điểm đến, chọn dịch vụ phù hợp với nhu cầu tiếp cận, đặt chỗ và quản lý chuyến đi — theo cách bạn muốn.</p>
        <div class="hero-actions">
          <button class="btn primary" data-page="explore">Khám phá dịch vụ</button>
          <button class="btn secondary" data-page="search">🔊 Tìm bằng giọng nói</button>
        </div>
      </div>
      <div class="voice-card">
        <button class="voice-circle" id="heroVoice" aria-label="Bắt đầu tìm kiếm bằng giọng nói">🎙️</button>
        <h3>Bạn muốn đi đâu ở Hà Nội?</h3>
        <div class="voice-status" id="heroVoiceStatus">Nhấn micro để thử tìm kiếm bằng giọng nói.</div>
        <div class="chips">
          <button class="chip" data-example="Tìm điểm đến yên tĩnh">Điểm đến yên tĩnh</button>
          <button class="chip" data-example="Tìm chỗ dễ đi cho người khiếm thị">Chỗ dễ tiếp cận</button>
          <button class="chip" data-example="Đặt tour đi bộ phố cổ">Đặt tour phố cổ</button>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><div class="eyebrow">Một nơi — nhiều nhu cầu</div><h2>Tìm đúng dịch vụ bạn cần</h2></div><button class="btn secondary" data-page="explore">Xem tất cả</button></div>
      <div class="grid">
        ${["Điểm đến","Lưu trú","Ăn uống","Hoạt động","Vé","Di chuyển"].map((c,i)=>`
        <button class="card" style="text-align:left;border:1px solid var(--line);padding:0" data-cat="${c}">
          <div class="card-top"><span class="symbol">${["📍","🏨","🍜","🎨","🎟️","🚕"][i]}</span></div>
          <div class="card-body"><h3>${c}</h3><div class="muted">${categoryFilters[c].length} tiêu chí tiếp cận riêng cho loại dịch vụ này.</div></div>
        </button>`).join("")}
      </div>
    </section>
    <section class="section">
      <div class="section-head"><div><div class="eyebrow">Được người dùng chọn</div><h2>Dịch vụ có thông tin tiếp cận</h2></div></div>
      <div class="grid">${data.slice(0,6).map(card).join("")}</div>
    </section>
  </div>`;
}

function card(x){
  return `<article class="card">
    <div class="card-top"><span class="status ${x.level}">${x.status}</span><span class="symbol">${x.icon}</span></div>
    <div class="card-body">
      <div class="meta">${x.cat} · ${x.area}</div><h3>${x.name}</h3><div class="muted">${x.desc}</div>
      <div class="badges">${x.tags.map(t=>`<span class="badge">${tagLabel(t)}</span>`).join("")}</div>
      <strong>${x.price}</strong>
      <div class="card-actions">
        <button class="btn secondary" data-detail="${x.id}">Xem chi tiết</button>
        <button class="btn primary" data-book="${x.id}">Đặt ngay</button>
      </div>
      <button class="btn secondary" style="width:100%;margin-top:8px" data-speak="${escapeAttr(x.name+". "+x.desc+". Giá "+x.price)}">🔊 Nghe mô tả</button>
    </div>
  </article>`;
}
function tagLabel(t){return ({staff:"👤 Có hỗ trợ",audio:"🔊 Audio",navigation:"🧭 Dễ định hướng",stepfree:"♿ Không bậc"})[t]||t}
function escapeAttr(s){return s.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}

function explore(){
  const filtered = data.filter(x=>x.cat===state.cat)
    .filter(x=>!state.query || (x.name+" "+x.desc+" "+x.area).toLowerCase().includes(state.query.toLowerCase()))
    .filter(x=>!state.onlyFit || x.tags.some(t=>state.profile.has(t)))
    .filter(x=>!state.filters.length || state.filters.every(f=>matchesFilter(x,f)));
  return `<div class="container">
    <div class="page-head"><div class="eyebrow">Khám phá</div><h1>Tìm nơi phù hợp với cách bạn du lịch.</h1><p>Tiêu chí thay đổi theo từng loại dịch vụ. Bạn không cần lọc những thứ không liên quan.</p>
      <div class="search-box"><input id="exploreSearch" value="${escapeAttr(state.query)}" placeholder="Tìm tên địa điểm, khu vực, dịch vụ..."><button class="btn primary" id="exploreSearchBtn">Tìm</button></div>
    </div>
    <div class="category-tabs">${["Điểm đến","Lưu trú","Ăn uống","Hoạt động","Vé","Di chuyển"].map(c=>`<button class="tab ${c===state.cat?"active":""}" data-cat="${c}">${c}</button>`).join("")}</div>
    <div class="explore-layout">
      <aside class="panel">
        <div class="filter-group"><strong>Lọc nhanh</strong>
          <label class="check"><input type="checkbox" id="fitCheck" ${state.onlyFit?"checked":""}> Phù hợp với nhu cầu của tôi</label>
          <label class="check"><input type="checkbox" id="verifiedCheck"> Đã có thông tin tiếp cận</label>
        </div>
        <div class="filter-group"><strong>${state.cat}</strong>
          ${categoryFilters[state.cat].map((f,i)=>`<label class="check"><input type="checkbox" class="filterCheck" data-filter="${escapeAttr(f)}" ${state.filters.includes(f)?"checked":""}> ${f}</label>`).join("")}
        </div>
        <button class="btn secondary" style="width:100%" id="clearFilters">Xóa bộ lọc</button>
      </aside>
      <section><div class="section-head"><div><strong>${filtered.length}</strong> kết quả</div><button class="btn secondary" data-speak="Bạn đang xem ${filtered.length} kết quả thuộc nhóm ${state.cat}.">🔊 Đọc kết quả</button></div>
      <div class="grid">${filtered.length?filtered.map(card).join(""):`<div class="empty" style="grid-column:1/-1">Chưa có kết quả phù hợp. Hãy thử bỏ bớt bộ lọc.</div>`}</div></section>
    </div>
  </div>`;
}

function matchesFilter(x,f){
  const map={
    "Audio guide / thuyết minh âm thanh":"audio","HDV hoặc nhân viên hỗ trợ":"staff","Chỉ đường dễ định hướng":"navigation","Lối vào không bậc":"stepfree",
    "Check-in có hỗ trợ":"staff","Hướng dẫn tới phòng":"navigation","Hỗ trợ hành lý":"staff","Thông tin âm thanh":"audio","Thang máy":"stepfree","Phòng dễ tìm":"navigation",
    "Nhân viên đưa tới bàn/gọi món":"staff","Menu điện tử đọc được":"audio","Menu Braille / chữ lớn":"audio","Lối vào dễ tiếp cận":"stepfree","Bàn dễ tìm":"navigation","Không gian yên tĩnh":"quiet",
    "Hướng dẫn viên":"staff","Mô tả âm thanh":"audio","Hỗ trợ xúc giác":"audio","Hỗ trợ di chuyển":"staff","Đặt hỗ trợ trước":"staff","Khung giờ linh hoạt":"flex",
    "Audio guide":"audio","Hỗ trợ tại cổng":"staff","Quầy vé hỗ trợ":"staff","Đăng ký hỗ trợ":"staff","E-ticket":"audio",
    "Xe riêng / shuttle / taxi":"staff","Tài xế hỗ trợ lên xuống":"staff","Điểm đón rõ ràng":"navigation","Đón tại sảnh":"navigation","Theo dõi chuyến":"navigation","Liên hệ tài xế":"staff"
  };
  const key=map[f]; return key ? x.tags.includes(key) : true;
}

function searchPage(){
  const results=state.query?data.filter(x=>(x.name+" "+x.area+" "+x.desc).toLowerCase().includes(state.query.toLowerCase())):data;
  return `<div class="container">
    <div class="page-head"><div class="eyebrow">Tìm kiếm</div><h1>Nói điều bạn cần.</h1><p>Bạn có thể nhập bằng bàn phím hoặc thử micro. WayEcho sẽ đưa bạn tới nhóm dịch vụ phù hợp.</p>
      <div class="search-box"><input id="globalSearch" value="${escapeAttr(state.query)}" placeholder="Ví dụ: chỗ yên tĩnh có nhân viên hỗ trợ"><button class="btn accent" id="voiceSearch">🎙️ Nói</button><button class="btn primary" id="globalSearchBtn">Tìm</button></div>
    </div>
    <div class="panel"><strong>Gợi ý câu tìm kiếm</strong><div class="chips">
      ${["Tìm chỗ ăn có nhân viên đưa tới bàn","Tìm khách sạn có hỗ trợ check-in","Tìm hoạt động có hướng dẫn viên","Tìm xe có tài xế hỗ trợ lên xuống"].map(q=>`<button class="tab exampleSearch" data-q="${q}">${q}</button>`).join("")}
    </div></div>
    <section class="section"><div class="section-head"><div><h2>${state.query?"Kết quả tìm kiếm":"Tất cả dịch vụ"}</h2><span class="muted">${results.length} kết quả</span></div></div>
      <div class="grid">${results.map(card).join("")}</div>
    </section>
  </div>`;
}

function tripsPage(){
  return `<div class="container"><div class="page-head"><div class="eyebrow">Chuyến đi của tôi</div><h1>Lịch trình của bạn.</h1><p>Những dịch vụ đã xác nhận được gom vào một hành trình để bạn dễ theo dõi.</p></div>
  <div class="panel">${state.trips.length?state.trips.map((t,i)=>`<div class="trip-item">
    <div class="datebox">${t.date?new Date(t.date).toLocaleDateString("vi-VN",{day:"2-digit",month:"2-digit"}):"—"}</div>
    <div><strong>${t.name}</strong><div class="muted">${t.time||"Chưa chọn giờ"} · ${t.note||"Không có ghi chú"}</div></div>
    <button class="btn secondary" data-speak="${escapeAttr("Ngày "+(t.date||"chưa chọn")+". "+t.name+". "+(t.time||"Chưa chọn giờ"))}">🔊 Nghe</button>
  </div>`).join(""):`<div class="empty"><div class="big-stat">0</div><h3>Chưa có lịch trình</h3><p>Hãy đặt một dịch vụ từ mục Khám phá. Khi xác nhận, dịch vụ sẽ xuất hiện ở đây.</p><button class="btn primary" data-page="explore">Khám phá ngay</button></div>`}</div>
  </div>`;
}

function bookingsPage(){
  return `<div class="container"><div class="page-head"><div class="eyebrow">Đặt chỗ</div><h1>Quản lý các yêu cầu đã đặt.</h1><p>Kiểm tra trạng thái và xem lại yêu cầu hỗ trợ đã gửi cho từng dịch vụ.</p></div>
  <div class="grid" style="grid-template-columns:1fr">${state.bookings.length?state.bookings.map((b,i)=>`<div class="panel">
    <div style="display:flex;justify-content:space-between;gap:15px"><div><div class="meta">${b.cat} · ${b.date} · ${b.time}</div><h3>${b.name}</h3></div><span class="status easy" style="position:static;height:max-content">Đã gửi yêu cầu</span></div>
    <p><strong>Nhu cầu hỗ trợ:</strong> ${b.need||"Không có yêu cầu thêm."}</p>
    <p class="muted">Số khách: ${b.guests}</p>
    <div class="card-actions"><button class="btn secondary" data-speak="${escapeAttr("Đặt chỗ "+b.name+". Ngày "+b.date+". "+b.time+". Nhu cầu: "+(b.need||"không có"))}">🔊 Nghe</button><button class="btn primary" data-trip="${i}">Thêm vào chuyến đi</button></div>
  </div>`).join(""):`<div class="empty">Bạn chưa có đặt chỗ nào.</div>`}</div></div>`;
}

function supportPage(){
  return `<div class="container"><div class="page-head"><div class="eyebrow">Hỗ trợ</div><h1>Cần người đồng hành?</h1><p>WayEcho kết nối hỗ trợ trong quá trình tìm kiếm, đặt dịch vụ và chuẩn bị chuyến đi.</p></div>
    <div class="grid">
      <div class="panel"><div class="big-stat">24/7</div><h3>Hỗ trợ khẩn cấp</h3><p class="muted">Trong bản demo, nút này tạo yêu cầu hỗ trợ và hiển thị trạng thái để mô phỏng luồng.</p><button class="btn danger" id="sosBtn">Gửi yêu cầu hỗ trợ</button></div>
      <div class="panel"><h3>Hướng dẫn sử dụng</h3><p>1. Chọn loại dịch vụ → 2. Lọc theo nhu cầu → 3. Xem thông tin tiếp cận → 4. Đặt và gửi yêu cầu hỗ trợ.</p><button class="btn secondary" data-speak="Bước một, chọn loại dịch vụ. Bước hai, lọc theo nhu cầu. Bước ba, xem thông tin tiếp cận. Bước bốn, đặt và gửi yêu cầu hỗ trợ.">🔊 Nghe hướng dẫn</button></div>
      <div class="panel"><h3>Liên hệ doanh nghiệp</h3><p class="muted">Bạn có thể xem thông tin hỗ trợ của từng dịch vụ trước khi đặt. Trong bản demo, thông tin này nằm ở trang chi tiết.</p><button class="btn primary" data-page="explore">Xem dịch vụ</button></div>
    </div>
  </div>`;
}

function render(){
  if(state.page==="home") app.innerHTML=home();
  if(state.page==="explore") app.innerHTML=explore();
  if(state.page==="search") app.innerHTML=searchPage();
  if(state.page==="trips") app.innerHTML=tripsPage();
  if(state.page==="bookings") app.innerHTML=bookingsPage();
  if(state.page==="support") app.innerHTML=supportPage();
  bindPage();
  save();
  app.focus();
}

function bindPage(){
  const q=document.querySelector("#exploreSearch");
  if(q) q.addEventListener("input",e=>{state.query=e.target.value;});
  document.querySelector("#exploreSearchBtn")?.addEventListener("click",()=>render());
  document.querySelector("#globalSearchBtn")?.addEventListener("click",()=>{state.query=document.querySelector("#globalSearch").value;render()});
  document.querySelectorAll(".exampleSearch").forEach(b=>b.addEventListener("click",()=>{state.query=b.dataset.q;render()}));
  document.querySelector("#fitCheck")?.addEventListener("change",e=>{state.onlyFit=e.target.checked;render()});
  document.querySelectorAll(".filterCheck").forEach(c=>c.addEventListener("change",e=>{
    const f=e.target.dataset.filter; state.filters=e.target.checked?[...state.filters,f]:state.filters.filter(x=>x!==f); render();
  }));
  document.querySelector("#clearFilters")?.addEventListener("click",()=>{state.filters=[];state.onlyFit=false;render()});
  document.querySelector("#voiceSearch")?.addEventListener("click",startVoice);
  document.querySelector("#heroVoice")?.addEventListener("click",startHeroVoice);
  document.querySelectorAll("[data-example]").forEach(b=>b.addEventListener("click",()=>{state.query=b.dataset.example;state.page="search";render()}));
  document.querySelector("#sosBtn")?.addEventListener("click",()=>toast("Đã tạo yêu cầu hỗ trợ. Nhân viên WayEcho sẽ liên hệ."));
  document.querySelectorAll("[data-trip]").forEach(b=>b.addEventListener("click",()=>{
    const booking=state.bookings[Number(b.dataset.trip)];
    state.trips.push({...booking}); save(); toast("Đã thêm vào Chuyến đi của tôi."); render();
  }));
}

function startHeroVoice(){
  const btn=document.querySelector("#heroVoice"), status=document.querySelector("#heroVoiceStatus");
  btn.classList.add("listening"); status.textContent="Đang nghe… hãy thử nói: “Tìm chỗ yên tĩnh có hỗ trợ”.";
  if("SpeechRecognition" in window || "webkitSpeechRecognition" in window){
    const R=window.SpeechRecognition||window.webkitSpeechRecognition; const r=new R(); r.lang="vi-VN";
    r.onresult=e=>{state.query=e.results[0][0].transcript;state.page="search";render()};
    r.onerror=()=>{btn.classList.remove("listening");status.textContent="Không nhận được giọng nói. Bạn có thể dùng câu mẫu."};
    r.onend=()=>btn.classList.remove("listening"); r.start();
  } else {
    setTimeout(()=>{state.query="chỗ yên tĩnh có hỗ trợ";state.page="search";render()},900);
  }
}
function startVoice(){
  if(!("SpeechRecognition" in window) && !("webkitSpeechRecognition" in window)){toast("Trình duyệt chưa hỗ trợ nhận diện giọng nói. Đang dùng mô phỏng.");state.query="chỗ có nhân viên hỗ trợ";render();return}
  const R=window.SpeechRecognition||window.webkitSpeechRecognition;const r=new R();r.lang="vi-VN";r.interimResults=false;
  toast("Đang nghe…");r.onresult=e=>{state.query=e.results[0][0].transcript;render()};r.onerror=()=>toast("Không nhận được giọng nói.");r.start();
}

function openDetail(id){
  const x=data.find(a=>a.id===id); if(!x)return;
  modalRoot.innerHTML=`<div class="modal-backdrop" id="detailBackdrop"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="detailTitle">
    <div class="modal-head"><div><div class="eyebrow">${x.cat} · ${x.area}</div><h2 id="detailTitle">${x.name}</h2><p class="muted">${x.desc}</p></div><button class="close" id="closeModal" aria-label="Đóng">×</button></div>
    <div class="badges">${x.tags.map(t=>`<span class="badge">${tagLabel(t)}</span>`).join("")}</div>
    <h3>Thông tin tiếp cận</h3><div class="access-list">${x.access.map(a=>`<div class="access-item"><strong>${a[0]}</strong><span class="${a[2]}">${a[1]}</span></div>`).join("")}</div>
    <div class="panel" style="margin-top:16px;background:#faf6ef"><strong>Giá tham khảo</strong><div class="big-stat">${x.price}</div><p class="muted">Bạn có thể gửi yêu cầu hỗ trợ riêng ngay trong bước đặt chỗ.</p></div>
    <div class="card-actions"><button class="btn secondary" data-speak="${escapeAttr(x.name+". "+x.desc)}">🔊 Nghe chi tiết</button><button class="btn primary" data-book="${x.id}">Đặt dịch vụ này</button></div>
  </div></div>`;
  document.querySelector("#closeModal").onclick=()=>modalRoot.innerHTML="";
  document.querySelector("#detailBackdrop").addEventListener("click",e=>{if(e.target.id==="detailBackdrop")modalRoot.innerHTML=""});
}

function openBooking(id){
  const x=data.find(a=>a.id===id); if(!x)return;
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">
    <div class="modal-head"><div><div class="eyebrow">Đặt dịch vụ</div><h2>${x.name}</h2></div><button class="close" id="closeBook">×</button></div>
    <div class="form-row"><div><label>Ngày</label><input id="bookDate" type="date" value="${new Date().toISOString().slice(0,10)}"></div><div><label>Giờ</label><input id="bookTime" type="time" value="09:00"></div></div>
    <label>Số khách</label><input id="bookGuests" type="number" min="1" value="1">
    <label>Bạn cần hỗ trợ gì?</label><textarea id="bookNeed" placeholder="Ví dụ: cần nhân viên đón tại cổng, hướng dẫn tới bàn, hỗ trợ lên xe..."></textarea>
    <div class="panel" style="margin-top:15px"><strong>WayEcho sẽ gửi yêu cầu này cho đơn vị cung cấp dịch vụ.</strong><p class="muted">Đây là điểm kết nối giữa “nhu cầu của bạn” và “dịch vụ hỗ trợ của doanh nghiệp”.</p></div>
    <div class="card-actions"><button class="btn secondary" id="cancelBook">Hủy</button><button class="btn primary" id="confirmBook">Xác nhận đặt chỗ</button></div>
  </div></div>`;
  document.querySelector("#closeBook").onclick=()=>modalRoot.innerHTML="";
  document.querySelector("#cancelBook").onclick=()=>modalRoot.innerHTML="";
  document.querySelector("#confirmBook").onclick=()=>{
    const b={...x,date:document.querySelector("#bookDate").value,time:document.querySelector("#bookTime").value,guests:document.querySelector("#bookGuests").value,need:document.querySelector("#bookNeed").value};
    state.bookings.push(b);save();modalRoot.innerHTML="";toast("Đã gửi đặt chỗ và yêu cầu hỗ trợ.");navigate("bookings");
  };
}

function openProfile(){
  modalRoot.innerHTML=`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true">
    <div class="modal-head"><div><div class="eyebrow">Accessibility Profile</div><h2>Nhu cầu của tôi</h2><p class="muted">WayEcho dùng lựa chọn này để lọc dịch vụ phù hợp hơn.</p></div><button class="close" id="closeProfile">×</button></div>
    <div class="profile-options">
      ${[
        ["staff","👤 Tôi cần nhân viên/HDV hỗ trợ"],
        ["audio","🔊 Tôi cần thuyết minh/mô tả âm thanh"],
        ["navigation","🧭 Tôi cần chỉ dẫn dễ định hướng"],
        ["stepfree","♿ Tôi ưu tiên lối đi không bậc"],
        ["quiet","🔇 Tôi ưu tiên không gian yên tĩnh"]
      ].map(o=>`<label class="profile-option ${state.profile.has(o[0])?"selected":""}"><input type="checkbox" data-pref="${o[0]}" ${state.profile.has(o[0])?"checked":""}> ${o[1]}</label>`).join("")}
    </div>
    <div class="card-actions" style="margin-top:18px"><button class="btn primary" id="saveProfile">Lưu nhu cầu</button></div>
  </div></div>`;
  document.querySelector("#closeProfile").onclick=()=>modalRoot.innerHTML="";
  document.querySelector("#saveProfile").onclick=()=>{
    state.profile=new Set([...document.querySelectorAll("[data-pref]:checked")].map(x=>x.dataset.pref));
    modalRoot.innerHTML="";toast("Đã cập nhật nhu cầu. Bộ lọc sẽ dùng cấu hình mới.");
  };
}

save(); render();
