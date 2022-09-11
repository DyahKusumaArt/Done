// import React, { useState, useEffect } from "react";
// import { Button, Form } from "react-bootstrap";
// import axios from "axios";
// const FormJadwal = (employeeId) => {
//     const co = employeeId;
//     useEffect(() => {
//         getByid();
//     }, [])
//     const [jadwal, setJadwal] = useState([]);


    

//     const hsenin = jadwal.filter(
//         (item) => (item && item.day === 'Senin')
//     )

//     console.log(jadwal);
//     console.log(hsenin);
//     console.log(co);

//     //jadwal
//     console.log(employeeId);
//     const [senin, setSenin] = React.useState("");
//     const [aSenin, setaSenin] = React.useState('');
//     const [selasa, setSelasa] = React.useState('');
//     const [aselasa, setaSelasa] = React.useState('');
//     const [rabu, setRabu] = React.useState('');
//     const [arabu, setaRabu] = React.useState('');
//     const [kamis, setKamis] = React.useState('');
//     const [akamis, setaKamis] = React.useState('');
//     const [jumat, setJumat] = React.useState('');
//     const [ajumat, setaJumat] = React.useState('');
//     const [sabtu, setSabtu] = React.useState('');
//     const [asabtu, setaSabtu] = React.useState('');
//     const [minggu, setMinggu] = React.useState('');
//     const [aminggu, setaMinggu] = React.useState('');
//     const [istirahat, setIstirahat] = React.useState('');
//     const [endIstirahat, setEndistirahat] = React.useState('');
    

//     const getByid = async () => {
//         axios.get("http://localhost:3000/employee-schedules/" , { withCredentials: 'true' })
//                 .then((response) => {
//                     setSenin(response.data[0].start_time);
//                     setaSenin(response.data[0].end_time);
//                     setSelasa(response.data[1].start_time);
//                     setaSelasa(response.data[1].start_time);
//                     setRabu(response.data[2].start_time);
//                     setaRabu(response.data[2].end_time);
//                     setKamis(response.data[3].start_time);
//                     setaKamis(response.data[3].end_time);
//                     setJumat(response.data[4].start_time);
//                     setaJumat(response.data[4].end_time);
//                     setSabtu(response.data[5].start_time);
//                     setaSabtu(response.data[5].end_time);
//                     setMinggu(response.data[6].end_time);
//                     setaMinggu(response.data[6].end_time);
//                     setIstirahat(response.data[4].start_break);
//                     setEndistirahat(response.data[4].end_break);
//                 })
//     };
//     console.log(senin);

//     const addSenin = () => {
        
//             axios.post("http://localhost:3000/employee-schedules", {
             
//                 day: 'Senin',
//                 start_time: senin,
//                 end_time: aSenin,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
    
//     };
//     const addSelasa = async (id) => {
        
//             axios.post("http://localhost:3000/employee-schedules", {
//                 employee_id: id,
//                 day: 'Selasa',
//                 start_time: selasa,
//                 end_time: aselasa,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
        
//     };
//     const addRabu = async (id) => {
     
//             axios.post("http://localhost:3000/employee-schedules", {
//                 employee_id: id,
//                 day: 'Rabu',
//                 start_time: rabu,
//                 end_time: arabu,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
        
//     };
//     const addKamis = async (id) => {
       
//             axios.post("http://localhost:3000/employee-schedules", {
             
//                 day: 'Kamis',
//                 start_time: kamis,
//                 end_time: akamis,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
        
//     };
//     const addJumat = async (id) => {
//         Object.values(co).map((i) => (
//             axios.post("http://localhost:3000/employee-schedules", {
//                 employee_id: i,
//                 day: 'Jumat',
//                 start_time: jumat,
//                 end_time: ajumat,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         ))
//     };
//     const addSabtu = async (id) => {

//             axios.post("http://localhost:3000/employee-schedules", {
//                 employee_id: id,
//                 day: 'Sabtu',
//                 start_time: sabtu,
//                 end_time: asabtu,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
        
//     };
//     const addMinggu = async (id) => {
//         Object.values(co).map((i) => (
//             axios.post("http://localhost:3000/employee-schedules", {
//                 employee_id: id,
//                 day: 'Minggu',
//                 start_time: minggu,
//                 end_time: aminggu,
//                 start_break: istirahat,
//                 end_break: endIstirahat
//             }, { withCredentials: 'true' })
//                 .then(() => {
//                     console.log('mau');
//                 })
//                 .catch((error) => {
//                     console.log(error);
//                 })
//         ))
//     };
//     const addJadwal = () => {
//         addSenin();
//         addSelasa();
//         addRabu();
//         addKamis();
//         addJumat();
//         addSabtu();
//         addMinggu();
//     };

//     return (
//         <Form onSubmit={() => addJadwal()}>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Senin
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={senin}
//                         placeholder="Time"
//                         onChange={(e) => setSenin(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={aSenin}
//                         placeholder="Time"
//                         onChange={(e) => setaSenin(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />
//                     </div>
//                 </div>
//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Selasa
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={selasa}
//                         placeholder="Time"
//                         onChange={(e) => setSelasa(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={aselasa}
//                         placeholder="Time"
//                         onChange={(e) => setaSelasa(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />

//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Rabu
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={rabu}
//                         placeholder="Time"
//                         onChange={(e) => setRabu(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={arabu}
//                         placeholder="Time"
//                         onChange={(e) => setaRabu(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />

//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Kamis
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={kamis}
//                         placeholder="Time"
//                         onChange={(e) => setKamis(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={akamis}
//                         placeholder="Time"
//                         onChange={(e) => setaKamis(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />

//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Jumat
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={jumat}
//                         placeholder="Time"
//                         onChange={(e) => setJumat(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={ajumat}
//                         placeholder="Time"
//                         onChange={(e) => setaJumat(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />

//                     </div>
//                 </div>
//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Sabtu
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={sabtu}
//                         placeholder="Time"
//                         onChange={(e) => setSabtu(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={asabtu}
//                         placeholder="Time"
//                         onChange={(e) => setaSabtu(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />

//                     </div>
//                 </div>

//             </div>
//             <div className="d-flex ">
//                 <div className="hari">
//                     Minggu
//                 </div>
//                 <div className="d-flex rowJam">
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={minggu}
//                         placeholder="Time"
//                         onChange={(e) => setMinggu(e.target.value)}
//                         required
//                     />
//                     <div className="mx-">
//                         Sampai
//                     </div>
//                     <input type="time"
//                         className="inputJam mx-3"
//                         id="time"
//                         value={aminggu}
//                         placeholder="Time"
//                         onChange={(e) => setaMinggu(e.target.value)}
//                     />
//                     <div className="">
//                         Istirahat
//                     </div>
//                     <div className="d-flex mx-3 istirahat" style={{ background: "white" }}>
//                         <input type="time"
//                             value={istirahat}
//                             placeholder="Time"
//                             onChange={(e) => setIstirahat(e.target.value)}
//                             id="startTime" />
//                         <span style={{ color: "black" }}>-</span>
//                         <input type="time"
//                             className="inputJam mx-1"
//                             value={endIstirahat}
//                             onChange={(e) => setEndistirahat(e.target.value)}
//                             placeholder="Time"
//                             id="endTime" />
//                     </div>
//                 </div>
//             </div>

//             <div className="mt-2 d-flex flex-row justify-content-between">
//                 <Button variant="danger w-35">
//                     Reset
//                 </Button>
//                 <Button variant="secondary w-35">
//                     Back
//                 </Button>
//                 <Button variant="success w-35" type="submit">Save</Button>
//             </div>
//         </Form>
//     )
// }
// export default FormJadwal;