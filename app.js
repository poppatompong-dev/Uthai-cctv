// JavaScript Utility for Client-Facing PTC BOQ Report
(function () {
  // Copy text utility
  window.copyText = function (text, btnId) {
    let btn = document.getElementById(btnId);
    let origText = btn.innerHTML;
    
    function done() {
      btn.innerHTML = 'คัดลอกสำเร็จ ✓';
      btn.style.background = '#38A169';
      btn.style.color = '#ffffff';
      setTimeout(() => {
        btn.innerHTML = origText;
        btn.style.background = '';
        btn.style.color = '';
      }, 1500);
    }
    
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(fallback);
    } else {
      fallback();
    }
    
    function fallback() {
      let ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch (e) {
        alert("ไม่สามารถคัดลอกได้อัตโนมัติ กรุณาคัดลอกด้วยตนเอง: " + text);
      }
      document.body.removeChild(ta);
    }
  };

  // Print Document Trigger
  window.printDoc = function () {
    window.print();
  };
})();
