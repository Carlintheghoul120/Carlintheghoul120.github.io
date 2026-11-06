import React, { useEffect, useRef, useState } from "react";
import "./brand-studio.css";

const categories = {
  systems: { name: "Business systems", headline: "Stop wasting time on manual work.", sub: "Custom systems that fit how you operate.", benefit: "Simplify processes. Connect your tools. Build for growth.", hook: "Still managing your business with scattered spreadsheets?" },
  websites: { name: "Websites", headline: "A website that works for your business.", sub: "Modern, responsive websites built for real people.", benefit: "Make a better first impression and make it easier to get in touch.", hook: "Your website should do more than just look good." },
  apps: { name: "Custom applications", headline: "Your idea deserves working software.", sub: "Web apps, portals and tailored digital products.", benefit: "Turn complex workflows into straightforward experiences.", hook: "Outgrowing the tools you use every day?" },
  consulting: { name: "Digital solutions", headline: "The right technology for the real problem.", sub: "Plan, build and improve your digital systems.", benefit: "From a rough idea to a dependable solution.", hook: "Not sure what technology your business needs?" },
};
const sizes = { square: [1080,1080], story: [1080,1920], linkedin: [1200,627], landscape: [1200,628] };
const styles = ["Editorial", "Terminal", "Spotlight"];
const palettes = { lime: ["#080a0a","#c9ff55"], cyan: ["#07161b","#7be7ea"], violet: ["#120e20","#c6a6ff"], white: ["#f4f7f1","#244b32"] };
const wrap = (ctx, message, maxWidth) => {
  const lines=[]; let line="";
  for (const word of message.split(/\s+/)) {
    const attempt=line ? line+" "+word : word;
    if (ctx.measureText(attempt).width > maxWidth && line) { lines.push(line); line=word; }
    else line=attempt;
  }
  if (line) lines.push(line);
  return lines;
};
function fitLines(ctx,text,maxWidth,maxLines,startSize) {
  for(let size=startSize;size>=22;size-=2) {
    ctx.font = "800 "+size+"px Manrope,Arial,sans-serif";
    const lines=wrap(ctx,text,maxWidth);
    if(lines.length<=maxLines)return {size,lines};
  }
  ctx.font="800 22px Arial,sans-serif";
  return {size:22,lines:wrap(ctx,text,maxWidth).slice(0,maxLines)};
}
function imageCover(ctx,image,x,y,w,h) {
  const scale=Math.max(w/image.width,h/image.height), iw=image.width*scale, ih=image.height*scale;
  ctx.drawImage(image,x+(w-iw)/2,y+(h-ih)/2,iw,ih);
}
function drawAd(canvas,form,image) {
  if(!canvas)return;
  const [w,h]=sizes[form.format]||sizes.square;
  const ctx=canvas.getContext("2d");
  if(!ctx)return;
  canvas.width=w;canvas.height=h;
  const [bg,accent]=palettes[form.palette],light=form.palette==="white",ink=light?"#121a16":"#f5f8f0";
  const wide=w>h, tall=h>w, pad=wide?64:86, maxW=wide?w*.55:w-pad*2;
  ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  const grad=ctx.createRadialGradient(w*.85,h*.16,0,w*.85,h*.16,w*.8);
  grad.addColorStop(0,light?"#d5eacb":accent+"33");grad.addColorStop(1,bg);
  ctx.fillStyle=grad;ctx.fillRect(0,0,w,h);
  if(form.style==="Terminal") {
    ctx.strokeStyle=light?"#244b3233":accent+"33";ctx.lineWidth=1;
    for(let x=0;x<w;x+=38){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=0;y<h;y+=38){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  }
  if(form.style==="Spotlight") {
    ctx.fillStyle=accent;ctx.beginPath();ctx.arc(w*.96,h*.27,wide?160:240,0,Math.PI*2);ctx.fill();
    ctx.fillStyle=bg;ctx.beginPath();ctx.arc(w*.96,h*.27,wide?130:195,0,Math.PI*2);ctx.fill();
  }
  if(image) {
    const x=wide?w*.69:pad, y=wide?pad:tall?h*.53:h*.56, width=wide?w*.27:w-pad*2, height=wide?h-pad*2:tall?h*.27:h*.22;
    ctx.save();ctx.beginPath();ctx.roundRect(x,y,width,height,24);ctx.clip();imageCover(ctx,image,x,y,width,height);ctx.restore();
    ctx.strokeStyle=accent;ctx.lineWidth=3;ctx.strokeRect(x,y,width,height);
  }
  ctx.textBaseline="top";
  ctx.fillStyle=accent;ctx.font="800 "+(wide?23:30)+"px Arial,sans-serif";
  ctx.fillText("〈 / 〉  NILRAC.DEV",pad,pad);
  const headingY=wide?135:tall?260:215;
  const fitted=fitLines(ctx,form.headline,maxW,wide?3:tall?5:4,wide?63:tall?91:77);
  ctx.fillStyle=ink;ctx.font="800 "+fitted.size+"px Manrope,Arial,sans-serif";
  const lineHeight=fitted.size*1.16;
  fitted.lines.forEach((line,index)=>ctx.fillText(line,pad,headingY+index*lineHeight));
  let y=headingY+fitted.lines.length*lineHeight+30;
  const detailSize=wide?24:30;
  ctx.font="500 "+detailSize+"px Manrope,Arial,sans-serif";
  ctx.fillStyle=light?"#365346":"#c8d2c8";
  wrap(ctx,form.subheading,maxW).slice(0,wide?2:3).forEach(line=>{ctx.fillText(line,pad,y);y+=detailSize*1.5;});
  const footerY=wide?h-120:h-210;
  ctx.fillStyle=accent;ctx.fillRect(pad,footerY,Math.min(maxW,500),wide?4:5);
  ctx.font="800 "+(wide?21:29)+"px Manrope,Arial,sans-serif";ctx.fillStyle=ink;
  ctx.fillText(form.cta.toUpperCase().slice(0,30),pad,footerY+22);
  ctx.font="500 "+(wide?17:24)+"px Arial,sans-serif";ctx.fillStyle=light?"#365346":"#c7d0c4";
  ctx.fillText("nilrac.runs-on.dev",pad,footerY+(wide?57:73));
  ctx.font="500 "+(wide?14:19)+"px Arial,sans-serif";
  ctx.fillText("DESIGNED & BUILT FOR REAL-WORLD PROBLEMS",pad,h-(wide?22:42));
}
function captions(form) {
  const tag="#Nilrac #WebDevelopment #BusinessSystems";
  return [
    form.hook+"\n\n"+form.subheading+"\n\n"+form.benefit+"\n\nHave a project in mind? "+form.cta+" → https://nilrac.runs-on.dev\n\n"+tag,
    form.headline+"\n\nI help individuals and businesses turn ideas into websites, apps and practical software solutions. Every project starts with understanding the problem.\n\nLet's build something useful: https://nilrac.runs-on.dev\n\n#DigitalSolutions #CustomSoftware #Nilrac",
    "Your business isn't one-size-fits-all. Your software shouldn't have to be either.\n\n"+form.subheading+"\n\n"+form.cta+" → https://nilrac.runs-on.dev\n\n#BuildWithNilrac #SoftwareDevelopment"
  ];
}
const initial=(category="systems")=>({...categories[category],category,format:"square",style:"Editorial",palette:"lime",cta:"Discuss your project"});
export default function BrandStudio() {
  const [form,setForm]=useState(initial);
  const [picture,setPicture]=useState(null);
  const [message,setMessage]=useState("");
  const canvas=useRef(null);
  const update=(key,value)=>setForm(current=>({...current,[key]:value}));
  useEffect(()=>{drawAd(canvas.current,form,picture)},[form,picture]);
  function download() {
    drawAd(canvas.current,form,picture);
    const a=document.createElement("a");
    a.href=canvas.current.toDataURL("image/png");
    a.download="nilrac-"+form.category+"-"+form.format+".png";
    a.click();setMessage("PNG download started.");
  }
  async function upload(event) {
    const file=event.target.files?.[0];if(!file)return;
    if(!["image/png","image/jpeg","image/webp"].includes(file.type)||file.size>10*1024*1024){setMessage("Choose a PNG, JPG or WebP smaller than 10MB.");return;}
    const url=URL.createObjectURL(file);
    try{
      const img=new Image();img.src=url;await img.decode();setPicture(img);setMessage("Image added to your ad.");
    }catch{setMessage("Unable to load this image.");}finally{URL.revokeObjectURL(url);}
  }
  const copy=captions(form);
  async function copyText(text) {
    try{await navigator.clipboard.writeText(text);setMessage("Caption copied.");}
    catch{setMessage("Clipboard unavailable — select and copy the caption manually.");}
  }
  function save() {
    try{localStorage.setItem("nilrac-brand-studio-v2",JSON.stringify(form));setMessage("Settings saved in this browser (uploaded images are not saved).");}
    catch{setMessage("Browser storage unavailable.");}
  }
  function load() {
    try{const saved=JSON.parse(localStorage.getItem("nilrac-brand-studio-v2")||"null");if(saved&&categories[saved.category]){setForm({...initial(saved.category),...saved});setMessage("Saved settings loaded.");}else setMessage("No saved campaign found.");}
    catch{setMessage("Could not load saved settings.");}
  }
  return <div className="ns-root">
    <header className="ns-header"><div><a href="/" className="ns-brand">〈 / 〉 NILRAC<span>.DEV</span></a><p>BRAND STUDIO / PERSONAL CAMPAIGN WORKSPACE</p></div><a href="/" className="ns-back">← Back to portfolio</a></header>
    <section className="ns-intro"><div><p className="ns-kicker">MARKET YOUR WORK / NOT THE TOOL</p><h1>Build your next <em>opportunity.</em></h1><p>Create consistent Nilrac campaigns for websites, web apps, business systems and automation. Built around your services, not generic products.</p></div><span className="ns-note">NO API · NO FEES · LOCAL EDITING</span></section>
    <main className="ns-grid">
      <section className="ns-panel ns-editor" aria-label="Campaign editor"><h2>01 / Campaign builder</h2>
        <label>Service to promote<select value={form.category} onChange={e=>{setForm(initial(e.target.value));setPicture(null);}}>{Object.entries(categories).map(([k,v])=><option key={k} value={k}>{v.name}</option>)}</select></label>
        <label>Ad headline<textarea rows="2" maxLength="130" value={form.headline} onChange={e=>update("headline",e.target.value)}/></label>
        <label>Supporting message<textarea rows="2" maxLength="150" value={form.subheading} onChange={e=>update("subheading",e.target.value)}/></label>
        <label>Main benefit<textarea rows="2" maxLength="175" value={form.benefit} onChange={e=>update("benefit",e.target.value)}/></label>
        <label>Opening hook<textarea rows="2" maxLength="175" value={form.hook} onChange={e=>update("hook",e.target.value)}/></label>
        <label>Call to action<input maxLength="45" value={form.cta} onChange={e=>update("cta",e.target.value)}/></label>
        <div className="ns-cols"><label>Ad format<select value={form.format} onChange={e=>update("format",e.target.value)}><option value="square">Square · 1080×1080</option><option value="story">Story · 1080×1920</option><option value="linkedin">LinkedIn · 1200×627</option><option value="landscape">Landscape · 1200×628</option></select></label>
        <label>Design<select value={form.style} onChange={e=>update("style",e.target.value)}>{styles.map(s=><option key={s}>{s}</option>)}</select></label></div>
        <label>Brand palette<select value={form.palette} onChange={e=>update("palette",e.target.value)}><option value="lime">Nilrac lime / charcoal</option><option value="cyan">Cyan / midnight</option><option value="violet">Violet / midnight</option><option value="white">Minimal / light</option></select></label>
        <label>Optional image<input type="file" accept="image/png,image/jpeg,image/webp" onChange={upload}/></label><p className="ns-hint">Your image stays in this browser. Uploading is optional.</p>
        <div className="ns-actions"><button type="button" onClick={save}>Save campaign</button><button type="button" onClick={load}>Load saved</button><button type="button" onClick={()=>setPicture(null)}>Remove image</button></div>
      </section>
      <section className="ns-panel ns-result"><div className="ns-result-header"><h2>02 / Live preview</h2><span>{sizes[form.format].join(" × ")} PX</span></div>
        <div className="ns-canvas"><canvas ref={canvas} aria-label="Nilrac ad preview" /></div>
        <button type="button" className="ns-download" onClick={download}>↓ Download PNG</button>
        <h2 className="ns-copy-title">03 / Campaign captions</h2><p className="ns-hint">Template-generated copy; not AI-written. Review claims before publishing.</p>
        {copy.map((text,i)=><div className="ns-caption" key={i}><div className="ns-caption-top"><strong>{["Problem → solution","Positioning","Direct offer"][i]}</strong><button onClick={()=>copyText(text)}>Copy caption</button></div><pre>{text}</pre></div>)}
      </section>
    </main><p className="ns-status" role="status" aria-live="polite">{message}</p>
    <footer className="ns-footer">NILRAC.DEV — DIGITAL SOLUTIONS BUILT FOR REAL PROBLEMS</footer>
  </div>;
}
