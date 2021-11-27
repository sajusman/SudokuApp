import React from "react";
import SugokuService from "../Services/SugokuService";
import Utility from "../Utility/Utility";

class Interface extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            status: "",
            difficulty: ""
        }
    }



    rebuildGrid(difficulty) {
        SugokuService.fetchPuzzle(difficulty).then(result => {
            var data = result.data;
            this.setState({
                difficulty: difficulty
            })
            this.props.rebuildGrid(data.board);
        });
    }

    clearGrid() {
        this.props.rebuildGrid(Utility.getEmptyGrid());
    }

    validateGrid(){
        SugokuService.validateGrid(this.props.grid).then( result => {
            var data = result.data;
            this.setState({
                status: data.status
            })
        });
    }

    fetchDifficulty() {
        SugokuService.fetchDifficulty(this.props.grid).then( result => {
            var data = result.data;
            this.setState({
                difficulty: data.difficulty
            })
        });
    }



    solvePuzzle() {
        SugokuService.solvePuzzle(this.props.grid).then(result => {
            var data = result.data;
            this.setState({
                status : data.status,
                difficulty : data.difficulty
            })
            this.props.rebuildGrid(data.solution);
        });
    }

    render() {
        return <div>
            <h4>Generate :</h4>
            <div className="interfaceDifficulty">
                <button onClick={() => {
                    this.rebuildGrid("easy")
                }
                }> Easy </button>

                <button onClick={() => {
                    this.rebuildGrid("medium")
                }
                }> Medium </button>

                <button onClick={() => {
                    this.rebuildGrid("hard")
                }
                }> Hard </button>

                <button onClick={() => {
                    this.rebuildGrid("random")
                }
                }> Random </button>

                <button onClick={() => {
                    this.clearGrid();
                }}> Clear </button>
            </div>
            <div className="interfaceStatus">
                <button onClick={()=>{
                    this.validateGrid();
                }}> Validate </button> 
                
                <input className="Status" type="text" value={this.state.status} placeholder="Status" readOnly></input>

                <input className="Status" type="text" value={this.state.difficulty} placeholder="Difficulty" readOnly></input>
                
                <button onClick={() => {
                    this.fetchDifficulty();
                }
                }> Difficulty </button>
            </div>
            <div className="interfaceSolve">
                <button onClick={() => {
                    this.solvePuzzle();
                }}> Solve </button>
            </div>
        </div>
    }
}

export default Interface;