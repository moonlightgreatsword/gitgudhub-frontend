import React from 'react'

class AddForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            author: '', 
            description: '',
            name: props.name,
            gameId: props.id, 
            released:props.released,
            metacritic:props.metacritic,
            backround_image:props.background_image
        }
    }

    // call this function on every keystroke
    authorChange = (event) => {
        this.setState({
            author: event.target.value,
        })
    }

    descriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    // call this when the user submits the form
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_BACKEND_URL}/games`, {
            method: 'POST',
            body: JSON.stringify({
                author: this.state.author,
                description : this.state.description,
                name: this.props.name,
                gameId: this.props.id, 
                released:this.props.released,
                metacritic:this.props.metacritic,
                backgroundImage:this.props.background_image
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            throw new Error(res)
        })
        // .then(resJson => {
        //     console.log('AddForm - resJson', resJson)
        //     // this.props.handleAddHoliday(resJson)
        //     this.setState({name: ''})
        // })
        .catch((err) => {console.log(err)})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="hidden" name="name" id="name" value={this.state.name}/>
                <input type="hidden" name="" id="gameId"  value={this.state.id}/>
                <input type="hidden" name="released" id="released"  value={this.state.released}/>
                <input type="hidden" name="metacritic" id="metacritic"  value={this.state.metacritic}/>
                <input type="hidden" name="metacritic" id="metacritic"  value={this.state.metacritic}/>
                <input type="hidden" name="background_image" id="background_image"  value={this.state.background_image}/>
                <input type="text" name="author" id="author"  onChange={this.authorChange} placeholder='Enter Your Name Here' required/>
                <input type="text" name="description" id="description"  onChange={this.descriptionChange} placeholder='Write Review Here' required/>
                <input type="Submit" value="Add a Review" />
            </form>
        )
    }
}

export default AddForm;