import React from "react";

class GuruForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // models
        }
        this.handleChange = this.handleChange.bind(this);
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = { ...this.state };
        delete data.models;

        let automobileUrl = `http://localhost:8100/api/automobiles/`;

    }
}

export default GuruForm