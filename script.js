 // === CONFIG — EDIT THESE IF NEEDED ===
    const WHATSAPP_NUMBER = "+918598471426"; // Komal's number (with country code)
    const DEFAULT_MSG = "Hey Komal! Free website audit chahiye. Business brief: ";

    // Helper to build wa.me links
    const wa = (msg=DEFAULT_MSG) => {
      const text = encodeURIComponent(msg);
      const num = WHATSAPP_NUMBER.replace(/[^\d+]/g,'');
      return `https://wa.me/${num.replace('+','')}/?text=${text}`;
    };

    // Attach to buttons
    const ids = ["whatsappTop","whatsappBottom","wa1","wa2","wa3","fab"];
    ids.forEach(id=>{
      const el = document.getElementById(id);
      if(el){ el.href = wa(); }
    });

    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();

    // Optional: UTM tracking in WhatsApp text based on button
    const tagMap = {
      whatsappTop: "Source:Hero",
      whatsappBottom: "Source:Footer",
      wa1: "Source:Pricing-Starter",
      wa2: "Source:Pricing-Standard",
      wa3: "Source:Pricing-Premium",
      fab: "Source:Float"
    };
    Object.keys(tagMap).forEach(k=>{
      const el = document.getElementById(k);
      if(!el) return;
      el.addEventListener('click', (e)=> {
        // update link on click so default text includes source
        const msg = `${DEFAULT_MSG} (${tagMap[k]})`;
        el.href = wa(msg);
      });
    });