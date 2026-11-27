/* Same-origin API only. No GAS URL, token or credential in browser. */
window.MP=(()=>{
  let sessionPromise;
  async function rpc(method,...args){
    const response=await fetch('/api/rpc',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json'},body:JSON.stringify({method,args}),cache:'no-store'});
    if(response.status===401){location.assign('/');throw Error('กรุณาเข้าสู่ระบบใหม่');}
    let data;try{data=await response.json()}catch{throw Error('ระบบ API ตอบกลับไม่ถูกต้อง โปรดลองใหม่');}
    if(!response.ok||!data.ok)throw Error(data.error||'ทำรายการไม่สำเร็จ');
    return data.result;
  }
  function session(){return sessionPromise||(sessionPromise=rpc('mpSessionV200').catch(e=>{sessionPromise=null;throw e}))}
  async function logout(){await fetch('/auth/logout',{method:'POST',credentials:'same-origin'});location.assign('/')}
  return {rpc,session,logout};
})();
