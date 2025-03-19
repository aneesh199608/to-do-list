(()=>{"use strict";var t={56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},s=[],i=0;i<t.length;i++){var c=t[i],d=o.base?c[0]+o.base:c[0],l=a[d]||0,p="".concat(d," ").concat(l);a[d]=l+1;var u=n(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=r(m,o);o.byIndex=i,e.splice(i,0,{identifier:p,updater:g,references:1})}s.push(p)}return s}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var s=0;s<a.length;s++){var i=n(a[s]);e[i].references--}for(var c=o(t,r),d=0;d<a.length;d++){var l=n(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=c}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);o&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},365:(t,e,n)=>{n.d(e,{A:()=>i});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([t.id,":root {\n  --primary-color: #2a5e8d;\n  --background-color: #f8f9fa;\n  --accent-color: #4CAF50;\n  --hover-bg: #f5f5f5;\n  --border-color: #e0e0e0;\n  --text-color: #2d333a;\n}\n\n/* Base Reset */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;\n  color: var(--text-color);\n  background: var(--background-color);\n  display: flex;\n}\n\n/* Main Layout */\n.container {\n  display: flex;\n  flex-direction: column;\n  width: 250px;\n  border-right: 1px solid var(--border-color);\n  padding: 20px;\n  height: 100vh;\n  background: white;\n}\n\n.task-container {\n  flex: 1;\n  padding: 30px 40px;\n  max-width: calc(100vw - var(--sidebar-width));\n  background: #f8f9fa;\n}\n\n/* Project Sidebar */\n#project-container {\n  margin-top: 20px;\n}\n\n.project {\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 15px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n\n.project.selected {\n  background-color: rgba(42, 94, 141, 0.1);\n  color: var(--primary-color);\n}\n\n.project.selected::before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 3px;\n  background-color: var(--primary-color);\n  border-radius: 3px;\n}\n\n.project:hover:not(.selected) {\n  background-color: var(--hover-bg);\n}\n\n.project h3 {\n  font-weight: 500;\n  font-size: 15px;\n  color: var(--text-color);\n}\n\n.project button {\n  background: none;\n  border: none;\n  color: #dc3545;\n  padding: 5px;\n  cursor: pointer;\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.project:hover button {\n  opacity: 1;\n}\n\n/* Task Area */\n#project-title {\n  font-size: 24px;\n  font-weight: 600;\n  margin-bottom: 20px;\n  color: var(--text-color);\n}\n\n#add-task-btn {\n  background: var(--accent-color);\n  color: white;\n  border: none;\n  padding: 8px 20px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: background 0.2s;\n}\n\n#add-task-btn:hover {\n  background: #45a049;\n}\n\n.task {\n  background: white;\n  padding: 18px;\n  border-radius: 8px;\n  margin-bottom: 15px;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n  border-left: 4px solid transparent;\n  display: flex;\n  align-items: center;\n  gap: 15px;\n}\n\n.task.high-priority { border-left-color: #dc3545; }\n.task.medium-priority { border-left-color: #ffc107; }\n.task.low-priority { border-left-color: #28a745; }\n\n.task p {\n  margin-bottom: 8px;\n  font-size: 15px;\n}\n\n.task button {\n  background: #dc3545;\n  color: white;\n  border: none;\n  padding: 6px 12px;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n/* Modal Dialogs */\ndialog.modal {\n  border: none;\n  border-radius: 8px;\n  padding: 0;\n  width: 90%;\n  max-width: 450px;\n  box-shadow: 0 10px 30px rgba(0,0,0,0.15);\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  margin: 0;\n}\n\ndialog.modal::backdrop {\n  background: rgba(0,0,0,0.4);\n}\n\ndialog.modal form {\n  padding: 25px;\n}\n\ndialog.modal h2 {\n  margin-bottom: 20px;\n  color: var(--primary-color);\n  font-size: 20px;\n}\n\n.form-group {\n  margin-bottom: 20px;\n}\n\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-size: 14px;\n  color: #666;\n}\n\n.form-group input,\n.form-group textarea,\n.form-group select {\n  width: 100%;\n  padding: 10px;\n  border: 1px solid var(--border-color);\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.form-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 25px;\n}\n\n.form-actions button[type=\"submit\"] {\n  background: var(--primary-color);\n  color: white;\n}\n\n.form-actions button {\n  padding: 10px 20px;\n  border-radius: 4px;\n  border: 1px solid var(--border-color);\n  cursor: pointer;\n  font-size: 14px;\n}\n\n/* Responsive Design */\n@media (max-width: 768px) {\n  .sidebar {\n    width: 100%;\n    position: static;\n    height: auto;\n  }\n  \n  .task-container {\n    margin-left: 0;\n    max-width: 100%;\n    padding: 20px;\n  }\n  \n  .container {\n    flex-direction: column;\n  }\n}\n\n/* Add Project Button */\n#add-project-btn {\n  background: var(--primary-color);\n  color: white;\n  width: 100%;\n  padding: 12px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 14px;\n  margin-top: 20px;\n  transition: background 0.2s;\n}\n\n#add-project-btn:hover {\n  background: #1f4a75;\n}\n\n/* Task List Items */\n.task-content {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  flex: 1;\n  min-width: 0;\n}\n\n.task-checkbox {\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n}\n\n.task-text {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.task-text.completed {\n  text-decoration: line-through;\n  opacity: 0.7;\n}\n\n.delete-task {\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n  opacity: 0.5;\n  transition: opacity 0.2s;\n}\n\n.delete-task:hover {\n  opacity: 1;\n}\n\n.delete-task svg {\n  width: 100%;\n  height: 100%;\n  fill: #dc3545;\n}\n\n.task-meta {\n  display: flex;\n  gap: 15px;\n  font-size: 0.9em;\n  color: #666;\n  margin-left: 10px;\n}\n\n.task-meta span {\n  display: flex;\n  align-items: center;\n}\n\n.task-meta span::before {\n  content: \"•\";\n  margin-right: 5px;\n  color: #999;\n}\n\n/* Add spacing between Add Task button and list */\n#task-list {\n  margin-top: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n\n.empty-state {\n    text-align: center;\n    padding: 40px 20px;\n    color: #666;\n    font-size: 1.1em;\n    border: 2px dashed var(--border-color);\n    border-radius: 8px;\n    margin: 20px 0;\n}\n\n.empty-state p {\n    margin: 0;\n}\n",""]);const i=s},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;class o{constructor(t,e,n,o){this.title=t,this.description=e,this.dueDate=n,this.priority=o,this.completed=!1}setTitle(t){this.title=t}getTitle(){return this.title}setDate(t){this.dueDate=t}getDate(){return this.dueDate}setPriority(t){this.priority=t}getPriority(){return this.priority}toggleComplete(){this.completed=!this.completed}}class r{constructor(t){this.name=t,this.tasks=[]}addTask(t){t instanceof o&&this.tasks.push(t)}removeTask(t){this.tasks.splice(t,1)}getTask(t){return this.tasks.find((e=>e.title===t))}updateTask(t,e){const n=this.getTask(t);n&&n.updateTask(e)}}class a{constructor(){this.projects=[],this.currentProject=null}addProject(t){t instanceof r&&(this.projects.push(t),this.currentProject||(this.currentProject=t))}removeProject(t){const e=this.projects.findIndex((e=>e.name===t));e>-1&&(this.projects.splice(e,1),this.currentProject?.name===t&&(this.currentProject=null))}getProject(t){return this.projects.find((e=>e.name===t))}updateProject(t,e){const n=this.getProject(t);n&&(n.name=e)}setCurrentProject(t){this.currentProject=t}getCurrentProject(){return this.currentProject}}class s{static renderProjects(){const t=document.getElementById("project-container");t.innerHTML="",0!==d.toDoList.projects.length?(d.toDoList.projects.forEach((e=>{const n=document.createElement("div");n.classList.add("project"),d.toDoList.getCurrentProject()?.name===e.name&&n.classList.add("selected"),n.innerHTML=`\n        <h3 data-project="${e.name}">${e.name}</h3>\n        <button data-delete-project="${e.name}">Delete</button>\n      `,t.appendChild(n)})),s.setupProjectEventListeners()):t.innerHTML='\n        <p class="empty-state">No projects found. Add your first project!</p>\n      '}static setupProjectEventListeners(){document.querySelectorAll("[data-project]").forEach((t=>{t.addEventListener("click",(t=>{document.querySelectorAll(".project").forEach((t=>t.classList.remove("selected"))),t.target.closest(".project").classList.add("selected"),d.selectProject(t.target.dataset.project)}))})),document.querySelectorAll("[data-delete-project]").forEach((t=>{t.addEventListener("click",(t=>{d.removeProject(t.target.dataset.deleteProject)}))}))}}class i{static renderTasks(){const t=document.getElementById("task-list"),e=document.getElementById("project-title"),n=document.getElementById("add-task-btn"),o=d.toDoList.getCurrentProject();if(n&&(n.style.display=o?"block":"none"),!o)return e.textContent="No Project Selected",void(t.innerHTML='\n        <div class="empty-state">\n          <p>Select or create a project to get started</p>\n        </div>\n      ');e.textContent=o.name,0!==o.tasks.length?(t.innerHTML="",o.tasks.forEach((e=>{const n=document.createElement("div");n.classList.add("task",`${e.priority.toLowerCase()}-priority`),n.innerHTML=`\n        <div class="task-content">\n          <input type="checkbox" class="task-checkbox" ${e.completed?"checked":""}>\n          <div class="task-text ${e.completed?"completed":""}">\n            <strong>${e.title}</strong>\n            <span>${e.description}</span>\n            <div class="task-meta">\n              <span>Due: ${e.dueDate}</span>\n              <span>Priority: ${e.priority}</span>\n            </div>\n          </div>\n          <div class="delete-task" data-remove-task="${e.title}">\n            <svg viewBox="0 0 24 24">\n              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>\n            </svg>\n          </div>\n        </div>\n      `,t.appendChild(n)})),i.setupTaskEventListeners()):t.innerHTML="<p>No tasks available. Add some tasks!</p>"}static setupTaskEventListeners(){document.querySelectorAll("[data-remove-task]").forEach((t=>{t.addEventListener("click",(t=>{d.removeTask(t.target.dataset.removeTask)}))})),document.querySelectorAll(".task-checkbox").forEach((t=>{t.addEventListener("change",(t=>{const e=t.target.closest(".task"),n=e.querySelector(".delete-task").dataset.removeTask;d.toDoList.getCurrentProject().getTask(n).toggleComplete(),e.querySelector(".task-text").classList.toggle("completed")}))}))}}class c{static initializeFormHandlers(){this.setupProjectForm(),this.setupTaskForm()}static setupProjectForm(){const t=document.getElementById("project-form-modal"),e=document.getElementById("project-form"),n=document.getElementById("add-project-btn");if(!t||!e||!n)return void console.error("Project form elements not found:",{modal:t,form:e,addProjectBtn:n});n.onclick=()=>t.showModal(),e.onsubmit=()=>{const n=document.getElementById("project-name").value;return n&&(this.onProjectSubmit(n),t.close(),e.reset()),!1};const o=t.querySelector(".close-dialog");o?o.onclick=()=>t.close():console.error("Close dialog button not found in project modal")}static setupTaskForm(){const t=document.getElementById("task-form-modal"),e=document.getElementById("task-form"),n=document.getElementById("add-task-btn");if(!t||!e||!n)return void console.error("Task form elements not found:",{modal:t,form:e,addTaskBtn:n});n.onclick=()=>t.showModal(),e.onsubmit=()=>{const n={title:document.getElementById("task-title").value,description:document.getElementById("task-description").value,dueDate:document.getElementById("task-due-date").value,priority:document.getElementById("task-priority").value};return this.onTaskSubmit(n),t.close(),e.reset(),!1};const o=t.querySelector(".close-dialog");o?o.onclick=()=>t.close():console.error("Close dialog button not found in task modal")}static onProjectSubmit(t){console.log("Project submitted:",t)}static onTaskSubmit(t){console.log("Task submitted:",t)}}class d{static toDoList=new a;static init(){console.log("UI Initialized"),d.toDoList.projects||(d.toDoList.projects=[]),d.loadSampleData(),s.renderProjects(),i.renderTasks(),d.setupEventListeners(),c.onProjectSubmit=t=>{const e=new r(t);d.toDoList.addProject(e),d.toDoList.setCurrentProject(e),s.renderProjects(),i.renderTasks()},c.onTaskSubmit=t=>{const e=d.toDoList.getCurrentProject();if(!e)return void alert("Please create or select a project first.");const n=new o(t.title,t.description,t.dueDate,t.priority);e.addTask(n),i.renderTasks()},c.initializeFormHandlers()}static loadSampleData(){const t=new r("My First Project");t.addTask(new o("Buy groceries","Milk, Eggs, Bread","2025-03-15","High")),t.addTask(new o("Workout","Morning cardio session","2025-03-16","Medium")),t.addTask(new o("Read a book","Finish 50 pages of a novel","2025-03-17","Low")),t.addTask(new o("Write a blog","Draft an article about JavaScript","2025-03-18","High")),t.addTask(new o("Clean room","Organize desk and wardrobe","2025-03-19","Medium")),d.toDoList.addProject(t)}static setupEventListeners(){document.getElementById("add-project-btn").addEventListener("click",d.addProject),document.getElementById("add-task-btn").addEventListener("click",d.addTask)}static selectProject(t){const e=d.toDoList.getProject(t);e&&(d.toDoList.setCurrentProject(e),i.renderTasks())}static removeProject(t){d.toDoList.removeProject(t),s.renderProjects(),i.renderTasks()}static removeTask(t){const e=d.toDoList.getCurrentProject();e&&(e.removeTask(t),i.renderTasks())}}var l=n(72),p=n.n(l),u=n(825),m=n.n(u),g=n(659),f=n.n(g),h=n(56),x=n.n(h),b=n(540),v=n.n(b),k=n(113),y=n.n(k),j=n(365),P={};P.styleTagTransform=y(),P.setAttributes=x(),P.insert=f().bind(null,"head"),P.domAPI=m(),P.insertStyleElement=v(),p()(j.A,P),j.A&&j.A.locals&&j.A.locals,document.addEventListener("DOMContentLoaded",d.init)})();