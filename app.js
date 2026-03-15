var currentRole='member';
var registeredUsers=[
  {phone:'0700123456',email:'mary@akibamama.app',password:'Akiba@2025!',role:'member',name:'Mary Wanjiku',chama:'Bidii Women Chama'},
  {phone:'0711234567',email:'faith@akibamama.app',password:'Chama#9Tr3s!',role:'treasurer',name:'Faith Muthoni',chama:'Bidii Women Chama'}
];
var allMembers=[
  {name:'Mary Wanjiku',    phone:'0700 123 456',savings:18500,months:11,score:78, loan:0,    status:'active',me:true},
  {name:'Faith Muthoni',   phone:'0711 234 567',savings:22000,months:12,score:91, loan:0,    status:'active'},
  {name:'Ann Kamau',       phone:'0722 345 678',savings:19500,months:11,score:80, loan:15000,status:'active'},
  {name:'Beatrice Otieno', phone:'0733 456 789',savings:15500,months:10,score:91, loan:18000,status:'active'},
  {name:'Grace Achieng',   phone:'0744 567 890',savings:12000,months:9, score:61, loan:12000,status:'active'},
  {name:'Esther Njeri',    phone:'0755 678 901',savings:14000,months:10,score:74, loan:0,    status:'active'},
  {name:'Purity Auma',     phone:'0766 789 012',savings:11000,months:8, score:68, loan:0,    status:'active'},
  {name:'Rose Mutua',      phone:'0777 890 123',savings:16500,months:10,score:77, loan:0,    status:'active'},
  {name:'Susan Wambui',    phone:'0788 901 234',savings:13000,months:9, score:70, loan:0,    status:'active'},
  {name:'Lucy Ndegwa',     phone:'0700 111 222',savings:17000,months:11,score:79, loan:0,    status:'active'},
  {name:'Alice Odhiambo',  phone:'0799 012 345',savings:9500, months:7, score:62, loan:0,    status:'active'},
  {name:'Hannah Chebet',   phone:'0711 222 333',savings:10500,months:8, score:65, loan:0,    status:'active'},
  {name:'Mercy Akinyi',    phone:'0722 333 444',savings:8500, months:6, score:59, loan:0,    status:'active'},
  {name:'Diana Wangeci',   phone:'0733 444 555',savings:12500,months:9, score:72, loan:0,    status:'active'},
  {name:'Violet Kemunto',  phone:'0744 555 666',savings:7500, months:6, score:57, loan:0,    status:'active'},
];
var loanRules={multiple:3,interest:10,period:90,max:50000,guarantors:2};

// ── CLOCK ─────────────────────────────────────────────────
function updateClock(){var n=new Date();var el=document.getElementById('app-clock');if(el)el.textContent=String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
updateClock();setInterval(updateClock,15000);

// ── NAV ───────────────────────────────────────────────────
var navMap={'view-home':'nav-home','view-member-home':'nav-home','view-dashboard':'nav-dashboard','view-members':'nav-members-tab','view-loans':'nav-loans','view-insights':'nav-insights','view-ai':'nav-ai','view-vote':'nav-loans','view-member-members':'nav-home'};
function showView(id){
  document.querySelectorAll('.view').forEach(function(v){v.classList.remove('active');});
  document.querySelectorAll('.nitem').forEach(function(n){n.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  if(navMap[id])document.getElementById(navMap[id]).classList.add('active');
}

// ── AUTH ──────────────────────────────────────────────────
function showSignUp(){document.getElementById('auth-signin').classList.add('hidden');document.getElementById('auth-signup').classList.remove('hidden');}
function showSignIn(){document.getElementById('auth-signup').classList.add('hidden');document.getElementById('auth-signin').classList.remove('hidden');clearErrors();}
function clearErrors(){['si-error','su-error'].forEach(function(id){var e=document.getElementById(id);if(e){e.style.display='none';e.textContent='';} });}
function showErr(id,msg){var e=document.getElementById(id);if(e){e.textContent=msg;e.style.display='block';}}
function togglePwd(inp,el){var i=document.getElementById(inp);if(!i)return;i.type=i.type==='password'?'text':'password';el.textContent=i.type==='text'?'hide':'show';}

function checkPwd(pwd){
  var m=document.getElementById('pwd-meter');if(!m)return;
  m.style.display=pwd.length>0?'block':'none';if(!pwd)return;
  var checks={len:{ok:pwd.length>=8,t:'8+ chars'},up:{ok:/[A-Z]/.test(pwd),t:'Uppercase'},lo:{ok:/[a-z]/.test(pwd),t:'Lowercase'},num:{ok:/[0-9]/.test(pwd),t:'Number'},sp:{ok:/[!@#$%^&*()+={}<>?]/.test(pwd),t:'Special char'},nn:{ok:!/mary|faith|password|pass|12345|chama/i.test(pwd),t:'No common words'}};
  var p=Object.values(checks).filter(function(c){return c.ok;}).length;
  var bars=['pb1','pb2','pb3','pb4'];var cols=['','weak','fair','good','strong','strong'];
  bars.forEach(function(b,i){var el=document.getElementById(b);if(el){el.className='pwd-bar';if(i<p)el.classList.add(cols[p]);}});
  var lbl=document.getElementById('pwd-lbl');if(lbl)lbl.textContent=['','Too weak','Weak','Fair','Strong','Very strong'][Math.min(p,5)];
  var hints=document.getElementById('pwd-hints');if(hints)hints.innerHTML=Object.values(checks).map(function(c){return'<span class="phint '+(c.ok?'phint-ok':'phint-fail')+'">'+(c.ok?'+ ':'')+c.t+'</span>';}).join('');
  return p;
}
function validatePwd(pwd){
  if(pwd.length<8)return'At least 8 characters required';
  if(!/[A-Z]/.test(pwd))return'Add an uppercase letter (A-Z)';
  if(!/[a-z]/.test(pwd))return'Add a lowercase letter (a-z)';
  if(!/[0-9]/.test(pwd))return'Add a number (0-9)';
  if(!/[!@#$%^&*()+={}<>?]/.test(pwd))return'Add a special character e.g. ! @ # $';
  if(/mary|faith|password|pass|12345|chama/i.test(pwd))return'Avoid common words in your password';
  return null;
}

function doSignIn(){
  var phone=document.getElementById('si-phone').value.trim();
  var pwd=document.getElementById('si-password').value;
  clearErrors();
  if(!phone||!pwd){showErr('si-error','Please fill in all fields.');return;}
  var user=registeredUsers.find(function(u){return(u.phone.replace(/\s/g,'')=== phone.replace(/\s/g,'')||u.email===phone.toLowerCase())&&u.password===pwd;});
  if(!user){showErr('si-error','Incorrect phone or password. Try the demo login below.');return;}
  loginSuccess(user.role,user.name);
}
function doSignUp(){
  var name=document.getElementById('su-name').value.trim();
  var phone=document.getElementById('su-phone').value.trim();
  var chama=document.getElementById('su-chama').value.trim();
  var role=document.getElementById('su-role').value;
  var pwd=document.getElementById('su-pwd').value;
  var pwd2=document.getElementById('su-pwd2').value;
  clearErrors();
  if(!name||!phone||!chama||!role){showErr('su-error','Please fill in all required fields.');return;}
  if(!/^07\d{8}$/.test(phone.replace(/\s/g,''))){showErr('su-error','Enter a valid Kenyan phone number e.g. 0712 345 678');return;}
  var pe=validatePwd(pwd);if(pe){showErr('su-error',pe);return;}
  if(pwd!==pwd2){showErr('su-error','Passwords do not match.');return;}
  var ex=registeredUsers.find(function(u){return u.phone.replace(/\s/g,'')=== phone.replace(/\s/g,'');});
  if(ex){showErr('su-error','Phone number already registered. Please sign in.');return;}
  registeredUsers.push({phone:phone,email:'',password:pwd,role:role,name:name,chama:chama});
  loginSuccess(role,name);
}
function loginDemo(role){currentRole=role;document.getElementById('login-screen').classList.add('hidden');document.getElementById('role-chip').classList.add('show');document.getElementById('role-chip').textContent=(role==='treasurer'?'Treasurer':'Member')+' · switch';applyRole();showToast('Welcome to AkibaMama');}
function loginSuccess(role,name){currentRole=role;document.getElementById('login-screen').classList.add('hidden');document.getElementById('role-chip').classList.add('show');document.getElementById('role-chip').textContent=(role==='treasurer'?'Treasurer':'Member')+' · switch';applyRole();showToast('Welcome, '+name.split(' ')[0]);}
function switchRole(){currentRole=currentRole==='member'?'treasurer':'member';document.getElementById('role-chip').textContent=(currentRole==='treasurer'?'Treasurer':'Member')+' · switch';applyRole();showToast('Switched to '+currentRole+' view');}
function applyRole(){var t=currentRole==='treasurer';document.getElementById('nav-dashboard').style.display=t?'':'none';document.getElementById('nav-members-tab').style.display=t?'':'none';showView(t?'view-home':'view-member-home');}

// ── MEMBERS ───────────────────────────────────────────────
function initials(name){return name.split(' ').slice(0,2).map(function(w){return w[0];}).join('').toUpperCase();}
function renderMembersNoAmounts(){
  var list=document.getElementById('members-list');if(!list)return;
  var active=allMembers.filter(function(m){return m.status==='active';});
  list.innerHTML=active.map(function(m){
    var sc=m.score>=80?'score-high':m.score>=65?'score-mid':'score-low';
    return'<div class="mem-card'+(m.me?' me':'')+'" onclick="openMemberDetail(\''+m.name+'\')">'+
      '<div class="mem-av">'+initials(m.name)+'</div>'+
      '<div class="mem-info"><div class="mem-name">'+m.name+(m.me?'<span class="you-badge">you</span>':'')+'</div>'+
      '<div class="mem-phone">'+m.phone+' &middot; '+m.months+' months</div></div>'+
      '<div class="mem-right"><div class="'+sc+' score-num">'+m.score+'</div>'+
      '<div style="font-size:0.56rem;color:var(--text3);margin-top:2px">score</div></div></div>';
  }).join('');
}
function renderMemberLimitedList(){
  var el=document.getElementById('member-limited-list');if(!el)return;
  var active=allMembers.filter(function(m){return m.status==='active';});
  el.innerHTML=active.map(function(m){
    return'<div class="mi"><div class="mi-av">'+initials(m.name)+'</div>'+
      '<span class="mi-name">'+m.name+(m.me?'<span class="mi-you">you</span>':'')+'</span>'+
      '<span class="mi-badge '+(m.me?'mib-y':'mib-a')+'">Active</span></div>';
  }).join('');
}
function openMemberDetail(name){
  var m=allMembers.find(function(x){return x.name===name;});if(!m)return;
  var maxLoan=Math.min(m.savings*loanRules.multiple,loanRules.max);
  document.getElementById('detail-initials').textContent=initials(m.name);
  document.getElementById('detail-name').textContent=m.name;
  document.getElementById('detail-phone').textContent=m.phone;
  document.getElementById('detail-grid').innerHTML=
    '<div class="mdb"><div class="mdb-label">Credit Score</div><div class="mdb-value '+(m.score>=80?'good':m.score>=65?'':'warn')+'">'+m.score+'/100</div></div>'+
    '<div class="mdb"><div class="mdb-label">Months Active</div><div class="mdb-value">'+m.months+'</div></div>'+
    '<div class="mdb"><div class="mdb-label">Active Loan</div><div class="mdb-value '+(m.loan>0?'warn':'good')+'">'+(m.loan>0?'KES '+m.loan.toLocaleString():'None')+'</div></div>'+
    '<div class="mdb"><div class="mdb-label">Status</div><div class="mdb-value '+(m.status==='active'?'good':'warn')+'">'+m.status.charAt(0).toUpperCase()+m.status.slice(1)+'</div></div>';
  document.getElementById('detail-ai').textContent='AI: Score '+m.score+'/100. Max loan KES '+maxLoan.toLocaleString()+'. '+(m.loan>0?'Has active loan — monitor repayment.':'No active loans, good standing.');
  openModal('modal-member-detail');
}

// ── MODALS ────────────────────────────────────────────────
function openModal(id){var m=document.getElementById(id);if(m)m.classList.add('open');}
function closeModal(id){var m=document.getElementById(id);if(m)m.classList.remove('open');}
document.querySelectorAll('.modal-overlay').forEach(function(m){m.addEventListener('click',function(e){if(e.target===m)m.classList.remove('open');});});

// ── LOAN RULES ────────────────────────────────────────────
function saveLoanRules(){
  loanRules.multiple=parseInt(document.getElementById('rule-input-multiple').value)||3;
  loanRules.interest=parseInt(document.getElementById('rule-input-interest').value)||10;
  loanRules.period=parseInt(document.getElementById('rule-input-period').value)||90;
  loanRules.max=parseInt(document.getElementById('rule-input-max').value)||50000;
  loanRules.guarantors=parseInt(document.getElementById('rule-input-guarantors').value)||2;
  document.getElementById('rule-multiple').textContent=loanRules.multiple+'x savings';
  document.getElementById('rule-interest').textContent=loanRules.interest+'% flat';
  document.getElementById('rule-period').textContent=loanRules.period+' days';
  document.getElementById('rule-max').textContent='KES '+loanRules.max.toLocaleString();
  document.getElementById('rule-guarantors').textContent=loanRules.guarantors+' members';
  closeModal('modal-loan-rules');showToast('Loan rules updated');
}

// ── ADD MEMBER ────────────────────────────────────────────
function addMember(){
  var name=document.getElementById('new-member-name').value.trim();
  var phone=document.getElementById('new-member-phone').value.trim();
  if(!name||!phone){showToast('Please fill in name and phone');return;}
  allMembers.push({name:name,phone:phone,savings:0,months:0,score:50,loan:0,status:'active'});
  renderMembersNoAmounts();closeModal('modal-add-member');
  showToast(name+' added. SMS sent to '+phone);
}

// ── LOAN APPLICATION ──────────────────────────────────────
function updateLoanCalc(){
  var amt=parseInt(document.getElementById('loan-amount').value)||0;
  var box=document.getElementById('loan-calc-box');
  if(amt>0){
    box.style.display='block';
    var interest=Math.round(amt*0.10);var total=amt+interest;var monthly=Math.round(total/3);
    document.getElementById('calc-p').textContent='KES '+amt.toLocaleString();
    document.getElementById('calc-i').textContent='KES '+interest.toLocaleString();
    document.getElementById('calc-t').textContent='KES '+total.toLocaleString();
    document.getElementById('calc-m').textContent='KES '+monthly.toLocaleString();
  }else{box.style.display='none';}
}
function submitLoanApp(){
  var amt=parseInt(document.getElementById('loan-amount').value)||0;
  var purpose=document.getElementById('loan-purpose').value;
  var g1=document.getElementById('loan-g1').value.trim();
  var g2=document.getElementById('loan-g2').value.trim();
  if(!amt||amt>55500){showToast('Enter a valid amount up to KES 55,500');return;}
  if(!purpose){showToast('Please select a purpose');return;}
  if(!g1||!g2){showToast('Please add both guarantors');return;}
  closeModal('modal-loan-apply');
  showToast('Loan request sent to treasurer');
  setTimeout(function(){showToast('Guarantors notified via SMS');},2200);
}

// ── VOTE ──────────────────────────────────────────────────
var votes={accept:0,deny:0,total:0,done:false,userVoted:false};
function castVote(choice){
  if(votes.userVoted||votes.done){showToast('You have already voted');return;}
  votes.userVoted=true;
  if(choice==='accept'){votes.accept++;votes.total++;}else{votes.deny++;votes.total++;}
  document.getElementById('btn-accept').classList.toggle('voted-accept',choice==='accept');
  document.getElementById('btn-deny').classList.toggle('voted-deny',choice==='deny');
  document.getElementById('btn-accept').disabled=true;
  document.getElementById('btn-deny').disabled=true;
  updateTally();showToast(choice==='accept'?'Voted to accept':'Voted to deny');
  setTimeout(function(){votes.accept+=9;votes.deny+=7;votes.total+=16;updateTally();checkResult();},1800);
}
function updateTally(){
  var t=17;
  document.getElementById('tb-accept').style.width=Math.round((votes.accept/t)*100)+'%';
  document.getElementById('tb-deny').style.width=Math.round((votes.deny/t)*100)+'%';
  document.getElementById('tc-accept').textContent=votes.accept+' / 17';
  document.getElementById('tc-deny').textContent=votes.deny+' / 17';
  document.getElementById('tally-status').textContent='Waiting for members ('+votes.total+' / 17 responded)';
}
function checkResult(){
  if(votes.done)return;
  var el=document.getElementById('tally-status');var live=document.getElementById('tally-live');
  if(votes.accept>votes.deny){
    votes.done=true;el.textContent='Approved — KES 25,000 released to Faith Muthoni';
    el.className='tally-status ts-approved';live.textContent='Final';live.style.color='var(--green)';
    showToast('Transaction approved by the group');
  }else{
    votes.done=true;el.textContent='Denied — transaction blocked. Funds safe.';
    el.className='tally-status ts-denied';live.textContent='Final';live.style.color='var(--red)';
    showToast('Transaction denied by the group');
  }
}
function approveLoan(name){showToast(name+' loan approved. Disbursing via M-Pesa');}
function denyLoan(name){showToast(name+' loan declined. SMS sent.');}

// ── TOAST ─────────────────────────────────────────────────
function showToast(msg){var t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(function(){t.classList.remove('show');},2800);}

// ── AI CHAT ───────────────────────────────────────────────
var chatHistory=[];var isTyping=false;
var SYSTEM_PROMPT='You are Akiba AI, a financial advisor inside AkibaMama, a chama savings app for Kenyan women. Give clear, practical advice. Use simple English. Reference Kenyan context: KES, M-Pesa, SACCOs, NSE, CBK, T-bills. For investments always state risk level, return, and minimum amount. The user is Mary Wanjiku, Bidii Women Chama, savings KES 18,500, chama total KES 120,000, 18 members. End every reply with one practical next step. Keep responses concise.';

function getTime(){var n=new Date();return String(n.getHours()).padStart(2,'0')+':'+String(n.getMinutes()).padStart(2,'0');}
function escH(t){return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function appendUserMsg(text){
  var c=document.getElementById('chat-messages');var r=document.createElement('div');r.className='mrow user';
  r.innerHTML='<div class="mav mav-u">M</div><div><div class="mbub user">'+escH(text)+'</div><div class="mtime u">'+getTime()+'</div></div>';
  c.appendChild(r);c.scrollTop=c.scrollHeight;
}
function showTyping(){
  var c=document.getElementById('chat-messages');var el=document.createElement('div');el.className='mrow';el.id='typing-ind';
  el.innerHTML='<div class="mav ai"><svg viewBox="0 0 24 24" stroke="#fff" stroke-width="2" fill="none" width="12" height="12"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg></div><div class="typing-bub"><div class="tdot"></div><div class="tdot"></div><div class="tdot"></div></div>';
  c.appendChild(el);c.scrollTop=c.scrollHeight;
}
function removeTyping(){var el=document.getElementById('typing-ind');if(el)el.remove();}
function appendAIMsg(text){
  var c=document.getElementById('chat-messages');var r=document.createElement('div');r.className='mrow';
  var safe=escH(text);
  var fmt=safe.replace(/\n\n/g,'<br><br>').replace(/\n/g,'<br>');
  r.innerHTML='<div class="mav ai"><svg viewBox="0 0 24 24" stroke="#fff" stroke-width="2" fill="none" width="12" height="12"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2"/></svg></div><div><div class="mbub ai"><div class="mlbl">Akiba AI</div>'+fmt+'</div><div class="mtime">'+getTime()+'</div></div>';
  c.appendChild(r);c.scrollTop=c.scrollHeight;
}
function sendMessage(){
  var inp=document.getElementById('chat-input');var text=inp.value.trim();
  if(!text||isTyping)return;inp.value='';inp.style.height='auto';callAI(text);
}
function sendQuickTopic(q){if(isTyping)return;showView('view-ai');callAI(q);}
function callAI(userText){
  isTyping=true;document.getElementById('send-btn').disabled=true;
  appendUserMsg(userText);chatHistory.push({role:'user',content:userText});showTyping();
  fetch('https://api.anthropic.com/v1/messages',{
    method:'POST',headers:{'Content-Type':'application/json'},
    body:JSON.stringify({model:'claude-sonnet-4-20250514',max_tokens:800,system:SYSTEM_PROMPT,messages:chatHistory})
  }).then(function(res){return res.json();}).then(function(data){
    removeTyping();
    var reply=(data.content&&data.content[0])?data.content[0].text:'Sorry, no response. Please try again.';
    chatHistory.push({role:'assistant',content:reply});appendAIMsg(reply);
    isTyping=false;document.getElementById('send-btn').disabled=false;
  }).catch(function(){
    removeTyping();appendAIMsg('Unable to connect. Please check your connection and try again.');
    isTyping=false;document.getElementById('send-btn').disabled=false;
  });
}

// ── INIT ──────────────────────────────────────────────────
renderMembersNoAmounts();
renderMemberLimitedList();