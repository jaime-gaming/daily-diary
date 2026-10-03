export function dateKey(d = new Date()) { return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
export function parseDate(key) { return new Date(`${key}T12:00:00`); }
export function addDays(key,n) { const d=parseDate(key); d.setDate(d.getDate()+n); return dateKey(d); }
export function daysBetween(from,to) { return Math.round((Date.UTC(...to.split('-').map((x,i)=>+x-(i===1?1:0)))-Date.UTC(...from.split('-').map((x,i)=>+x-(i===1?1:0))))/86400000); }
export function dayNumber(date,entries) { const first=[date,...entries.map(e=>e.date)].sort()[0]; return daysBetween(first,date)+1; }
export function longDate(date,options={weekday:'long',day:'numeric',month:'long',year:'numeric'}) { return parseDate(date).toLocaleDateString('es-ES',options); }
export function weekStart(key) { const day=parseDate(key).getDay(); return addDays(key,-((day+6)%7)); }
export function monthRange(key) { const d=parseDate(key); return [dateKey(new Date(d.getFullYear(),d.getMonth(),1)),dateKey(new Date(d.getFullYear(),d.getMonth()+1,0))]; }
export function monthMove(key,n) { const d=parseDate(key); return dateKey(new Date(d.getFullYear(),d.getMonth()+n,1)); }
export function generateCalendar(month) { const [start,end]=monthRange(month); const first=addDays(start,-((parseDate(start).getDay()+6)%7)); const count=Math.ceil((daysBetween(first,end)+1)/7)*7; return Array.from({length:count},(_,i)=>({date:addDays(first,i),inMonth:addDays(first,i).slice(0,7)===month.slice(0,7)})); }
