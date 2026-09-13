export function employeeColors(name:string) {
 let hash=0;for(const char of name.trim().toLowerCase())hash=(hash*31+char.charCodeAt(0))>>>0;
 const hue=hash%360;
 return {backgroundColor:"hsl("+hue+" 55% 95%)",color:"hsl("+hue+" 65% 28%)",borderColor:"hsl("+hue+" 35% 78%)"};
}
export default function EmployeeBadge({name}:{name:string}) {
 const unassigned=!name||name==="Unassigned";
 return <span className="lw-employee-badge" style={unassigned?undefined:employeeColors(name)}><span className="lw-employee-initials" aria-hidden="true">{unassigned?"—":name.trim().split(/\s+/).slice(0,2).map(part=>part[0]).join("").toUpperCase()}</span><span>{name||"Unassigned"}</span></span>;
}
