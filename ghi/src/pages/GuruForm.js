import React from "react";

function GuruForm(props) {
    return (
        <div className="form-outline mb-4">
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Sport/Team</label>
                    <input type="text" className="form-control" id="exampleSportTeam" placeholder="Enter picks here" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Guru's Choice</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </form>
        </div>
    )
}

export default GuruForm



// class GuruForm extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             pick: "",
//             pick_detail: "",
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }

//     async handleSubmit(event) {
//         event.preventDefault();
//         const data = { ...this.state };
//         delete data.models;

//         // let automobileUrl = `http://localhost:8100/api/automobiles/`;

//     }
// }

// export default GuruForm