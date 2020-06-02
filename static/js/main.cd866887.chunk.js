(this.webpackJsonpbmi_calc_react=this.webpackJsonpbmi_calc_react||[]).push([[0],{133:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),i=a.n(r),o=(a(80),a(14)),c=a(15),s=a(18),h=a(17),g=a(16),m=(a(81),a(179)),u=a(164),p=a(178),b=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(m.a,{row:!0,name:"system",defaultValue:"metric",onChange:function(t){"imperial"===t.target.value?(console.log(t.target.value),e.props.onChange(!0)):(console.log(t.target.value),e.props.onChange(!1))},style:{justifyContent:"center"}},l.a.createElement(u.a,{value:"imperial",control:l.a.createElement(p.a,{style:{color:"#00b7eb"}}),label:"Imperial",labelPlacement:"end"}),l.a.createElement(u.a,{value:"metric",control:l.a.createElement(p.a,{style:{color:"#ffa500"}}),label:"Metric",labelPlacement:"end"}))}}]),a}(l.a.Component),d=a(10),E=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(d.Textfield,{onChange:function(t){e.props.on_change(t.target.value)},pattern:"-?[0-9]*(\\.[0-9]+)?",error:"Input is not a number!",label:this.props.label,floatingLabel:!0,style:{width:"90%",color:"#000"},value:this.props.value}))}}]),a}(l.a.Component),A=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(d.Button,{raised:!0,primary:!0,onClick:this.props.onClick,ripple:!0},this.props.text)}}]),a}(l.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(d.Button,{raised:!0,accent:!0,onClick:this.props.onClick,ripple:!0},this.props.text)}}]),a}(l.a.Component),f=a(67),y=a.n(f),v=a(68),O=a.n(v),j=a(170),D=a(177),B=a(169),w=a(167),k=a(168),S=a(166),I=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(D.a,{open:this.props.openDialog},l.a.createElement(S.a,{align:"center"},this.props.title),l.a.createElement(w.a,null,l.a.createElement(k.a,{id:"alert-dialog-description",align:"center"},this.props.message())),l.a.createElement(B.a,{style:{justifyContent:"center"}},l.a.createElement(j.a,{type:"button",variant:"contained",color:"primary",style:{backgroundColor:"#369c52"},centerRipple:!0,onClick:this.props.onClose},"OK")))}}]),a}(l.a.Component),M=a(171),R=a(165),V=a(172),K=a(173),W=a(174),U=a(175),L=a(176),x=(a(133),function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return l.a.createElement(M.a,{component:R.a},l.a.createElement(V.a,{"aria-label":"bmi table"},l.a.createElement(K.a,{className:"table_color"},l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"center"},"BMI Value"),l.a.createElement(U.a,{align:"center"},"BMI Category"))),l.a.createElement(L.a,null,l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Less than 15"),l.a.createElement(U.a,{align:"center",className:"table_yellow"},"Very Severly Underweight")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 15 and 16"),l.a.createElement(U.a,{align:"center",className:"table_yellow"},"Severly Underweight")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 16 and 18.5"),l.a.createElement(U.a,{align:"center",className:"table_yellow"},"Underweight")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 18.5 and 25"),l.a.createElement(U.a,{align:"center",className:"table_green"},"Normal Healthyweight")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 25 and 30"),l.a.createElement(U.a,{align:"center",className:"table_yellow"},"Overweight")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 30 and 35"),l.a.createElement(U.a,{align:"center",className:"table_red"},"Moderately Obese")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Between 35 and 40"),l.a.createElement(U.a,{align:"center",className:"table_red"},"Severly Obese")),l.a.createElement(W.a,null,l.a.createElement(U.a,{align:"left"},"Over 40"),l.a.createElement(U.a,{align:"center",className:"table_red"},"Very Severly Obese")))))}}]),a}(l.a.Component)),H=a(69),T=a.n(H),N=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).updateHeight=function(e){this.setState({height:e})},n.updateWeight=function(e){this.setState({weight:e})},n.bmi_calc_metric=function(){return this.state.weight/(this.state.height/100*(this.state.height/100))},n.bmi_calc_imperial=function(){return 703*this.state.weight/(this.state.height*this.state.height)},n.reset=function(){this.setState({height:"",weight:""})},n.heightField=l.a.createRef(),n.state={height:"",weight:"",weightLabel:"Weight (kgs)",heightLabel:"Height (cms)",isImperial:!1,openDialog:!1,openChartDialog:!1},n.handleOpenDialog=n.handleOpenDialog.bind(Object(s.a)(n)),n.handleCloseDialog=n.handleCloseDialog.bind(Object(s.a)(n)),n.handleChartOpenDialog=n.handleChartOpenDialog.bind(Object(s.a)(n)),n.handleChartCloseDialog=n.handleChartCloseDialog.bind(Object(s.a)(n)),n.updateHeight=n.updateHeight.bind(Object(s.a)(n)),n.updateWeight=n.updateWeight.bind(Object(s.a)(n)),n.reset=n.reset.bind(Object(s.a)(n)),n.popMessage=n.popMessage.bind(Object(s.a)(n)),n.handleSystemChange=n.handleSystemChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleOpenDialog",value:function(){this.setState({openDialog:!0})}},{key:"handleCloseDialog",value:function(){this.setState({openDialog:!1})}},{key:"handleChartOpenDialog",value:function(){this.setState({openChartDialog:!0})}},{key:"handleChartCloseDialog",value:function(){this.setState({openChartDialog:!1})}},{key:"popMessage",value:function(){return this.state.isImperial?"BMI: ".concat(this.bmi_calc_imperial().toFixed(2)):"BMI: ".concat(this.bmi_calc_metric().toFixed(2))}},{key:"popChartMessage",value:function(){return l.a.createElement(x,null)}},{key:"handleSystemChange",value:function(e){console.log("imperial: ".concat(e)),e?this.setState({weightLabel:"Weight (lbs)",heightLabel:"Height (ins)",isImperial:e}):this.setState({weightLabel:"Weight (kgs)",heightLabel:"Height (cms)",isImperial:e})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d.Grid,{className:"heading_grid"},l.a.createElement(d.Cell,{col:12,phone:1},l.a.createElement("a",{href:"https://the-redlord.github.io/"},l.a.createElement("img",{src:T.a,height:"110",width:"110"}))),l.a.createElement(d.Cell,{col:12,phone:3,tablet:8},l.a.createElement("h2",null,"BMI Calculator")),l.a.createElement(d.Cell,{col:12,phone:4,tablet:8},l.a.createElement(I,{className:"chartpop",openDialog:this.state.openChartDialog,message:this.popChartMessage,onClose:this.handleChartCloseDialog,title:"BMI CHART"}),l.a.createElement(d.Button,{style:{color:"#1eff00"},raised:!0,ripple:!0,onClick:this.handleChartOpenDialog},"BMI CHART")),l.a.createElement(d.Cell,{col:4,phone:4,tablet:2}),l.a.createElement(d.Cell,{col:2,phone:1,tablet:2,style:{alignSelf:"center"}},"System: "),l.a.createElement(d.Cell,{col:3,phone:3,tablet:3},l.a.createElement(b,{onChange:this.handleSystemChange})),l.a.createElement(d.Cell,{col:3,phone:4,tablet:1}),l.a.createElement(d.Cell,{col:1,phone:1,tablet:1},l.a.createElement("img",{src:y.a})),l.a.createElement(d.Cell,{col:5,phone:3,tablet:7,style:{background:"#fff",borderRadius:10}},l.a.createElement(E,{label:this.state.weightLabel,on_change:this.updateWeight,value:this.state.weight})),l.a.createElement(d.Cell,{col:1,phone:1,tablet:1},l.a.createElement("img",{src:O.a})),l.a.createElement(d.Cell,{col:5,phone:3,tablet:7,style:{background:"#fff",borderRadius:10}},l.a.createElement(E,{label:this.state.heightLabel,on_change:this.updateHeight,value:this.state.height})),l.a.createElement(I,{openDialog:this.state.openDialog,title:"BMI VALUE",message:this.popMessage,onClose:this.handleCloseDialog}),l.a.createElement(d.Cell,{col:12,phone:4,tablet:8}),l.a.createElement(d.Cell,{col:6,phone:2,tablet:8},l.a.createElement(A,{text:"Submit",onClick:this.handleOpenDialog})),l.a.createElement(d.Cell,{col:6,phone:2,tablet:8},l.a.createElement(C,{text:"RESET",onClick:this.reset}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(134),a(135);i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},67:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge2YT2gcVRzHP/NmspttyDS7iZt/LBatpWmVbRFsREQrmEKhN6GCoODBQxQJekhAb/YgglpBPXjRg5RgxXo0YBTBevBPW2yV1EQbut1t82ebdDeb/TMz+zzETVKZ2ezsnyyB+dze+/3ee9/ve/P+MODh4eHRTJSy0Y9ORVC094EhoH1bFG2QBiZBGWN49KpTkrOBNfGXgFADxLlhCWlGefnNmF1QODZbm/lmiwcIorS86xTUyjQcsqs8re+rWVE5RlJ/2dTKY075ziuw/d98OXSnQLkVsOX540/eVR7//Q0S6Y091q/v5+RDpyrOee/8MwC89tiXAIyM262AM+VWoCI2CwOIp6aqyqmWmg2UKM1grTluqZuBZuEZKFHajJvLdnX1pmYD/fr+/5UHqsqpFuenxMdvS7vq28++VLfB7QiNf2IfGB6z1brj94Dri8xxhprEjl8Bz0Cz8Qw0mx1vwPUx6hahKER3d/JEVy8H2kNEdrVxPnmLEz178AlB3rLIWCZ/Z1JcSSU5l5glll2puH/XBob67mWvHuTT6StkLXO9PqCqBFtaEQosGwUe7uji0VAPR+/pI+wP3NVHR4sfn1hb/FZNJeBrodPn56AeZGYlRTyXoShtHwK1GzjUGWbkwGFeGYjywZ8X8VtwPByhu3VD5MRcjGPdEcc+HukIg6Lg0zSKskjWMPh2/gZfJ2b5eWnelR7XBt65/AufTf/Bi/seZOTgYbr8AbK5PJlsjrxhIqVksLPbsb0qBD16O1ZRki8UkFKiKYKLy0nX4qGKx9xmhKJw5sjTHAn3EvD7UTVBwTApFAwMy0L+9xkIIdBUAVLBsExWc/n1WMYyeWvqNybmbH/7bODwmKtpExelZPjCD3wYfZyB9g5UIdA0FU1VEUIBBJZVxDBMMqsmliwyu5rmvjYdCXwzd53TM5eZz2er1lDzKXS7kOeFX7/jZOR+nos8QI9/F3kMilKyYhnomm89VygKsWyGs/F/mEovc+nOYq3D1+cYNWSRz69PcyY2w9GuPk707mEwGGYmnUL3tbC3bTcAC/kcPy7e5Kub1yo+ZbairvdAUUomF+JMLsQJqCqDoW4uLC3yVLifxUKOn5K3sOokvETDLrKsZfH9QgKAc4lrjRpm5z8lyhlIb5uKrbnjFChnYLIBQqpDMuEUKmNAGQOWGiDHLUks5XWnoLOB4dGrSDMKylkg1QhlW5BC8gWmcohXR280YXwPDw+PCvgXxV9AyMI6HXMAAAAASUVORK5CYII="},68:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAB1UlEQVRoge2ZwS4DQRjH/9+2x1alCW5q1xO4SXvQeAJ3HEXY9AlIVMITNNWII848AXWoiIsnYMuNJk2re1P7OSBZtKvDTHVjfseZ+f7fN7vzn8nOAiGHRANGlsqsopB3antZoZoMVYX0Cz0BjUaQo9PK5fHJ+UUvY62SO2+V3HnZun6EPUAMBvjbrTRVaJjMXGTmYqrQMGXpfokTDeiFbJ6j1VH3jID0W1Ml9RDLlvPUlp1LyS50N+Ku+4oHgEx1zF1TkUv4DRydVi6JyZubTU936p8sPWY8pjKA6KeutsE8c20Pnf9EtxtSPWDt1hMeG/v4WjwARD0yDqzdekJUN7Ae0YAgzGLrAITgXYdx6NjxBVk5lZgYAMyd1oen6azGleQSXkI/3a9V6So7B/ql+/+W0KChPSAL7YGwoj0gC+2BsKI9IAvtgbCiPSCLf+uB0H/US/UARZ9sgJzu0eS8jhHTDUKqB26Wk02DvEUAna4Q2wZ7CzfLyaaobmA9ogG9YBVbeSZs+NuYkK+uxDdl51JyDozXYlsM+K8QKxP3sW0VuaTfjb6TKjRMIxK5AgDv+XnqNjcc4I0BuRv1c5sbdojIJiL7u+JFdDWDhv5T/9foCWh+yQtvHDdi/6mIvAAAAABJRU5ErkJggg=="},69:function(e,t,a){e.exports=a.p+"static/media/logo.19523405.svg"},75:function(e,t,a){e.exports=a(136)},80:function(e,t,a){},81:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.cd866887.chunk.js.map