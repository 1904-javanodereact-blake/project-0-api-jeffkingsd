import React from 'react';
import { insertClaim } from '../../../actions/claim.actions';
import { connect } from 'react-redux';
import { IState } from '../../../reducers';
import { User } from '../../../model/user';

interface IClaimState {
    author: number,
    amount: number,
    description: string,
    type: number
}

interface IClaimProps {
    currentUser?: User
    newclaim: IClaimState
    insertClaim: (author: number, amount: number, description: string, type: number) => void
}

export class ClaimComponent extends React.Component<IClaimProps, IClaimState> {
    constructor(props) {
        super(props);
        this.state = {
            author: 0,
            amount: 0,
            description: '',
            type: 0
        };
    }

    //Event Handlers
   submit = async (event) => {
        event.preventDefault();
        this.props.insertClaim(this.state.author, this.state.amount, this.state.description, this.state.type);
   }
    updateAmount = (e) => {
        this.setState({
        amount: e.target.value
        });
    }
    updateDescription = (e) => {
        this.setState({
        description: e.target.value
        })
    }
    updateAuthor= (e) => {
        this.setState({
        author: e.target.value
        });
        }
    updateType = (e) => {
        this.setState({
        type: e.target.value
        });
    }

    render() {
        console.log(User);
        const { amount, description, author, type }= this.state;
        return (
            <div className="model-content">
                    <div className="col-12 user-img">
                        <p className="col-sm-12 logtitle"> Freddy Fazbear Pizzeria</p>
                    </div>
                    <div className="col-12 form-input">
                        <form className="form-signin" onSubmit={this.submit}>
                            <h4 className = "">Author ID is your ID</h4>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Author ID"
                                required value={author} 
                                onChange={this.updateAuthor}
                                disabled={true}/>
                            </div>
                            <h4 className = "">Enter an amount</h4>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter an amount"
                                required value={amount} 
                                onChange={this.updateAmount}/>
                            </div>
                            <h4 className = "">Your description</h4>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control" 
                                placeholder="Enter a description"
                                required value={description} 
                                onChange={this.updateDescription}/>
                            </div>
                            <h4 className = "">Please select type</h4>
                        <select className="typelist" required value={+type} onChange={this.updateType}>
                            <option value="1">Explosions</option>
                            <option value="2">Missing child</option>
                            <option value="3">Accidental Death</option>
                            <option value="4">Weapons</option>
                            <option value="5">Broken Animatronics</option>
                            <option value="6">Stuffed in a suit</option>
                            <option value="7">Biten by a Animatronic</option>
                            <option value="8">Locked behind a door</option>
                            <option value="9">Phantoms stalking</option>
                            <option value="10">Night shift</option>
                        </select>
                        </form>
                    </div>
                </div>
        )
    }
}
const mapStateToProps = (state: IState) => {
    return  {
      claim: state.auth
    }
  }
  
  const mapDispatchToProps = {
    insertClaim: insertClaim
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ClaimComponent);