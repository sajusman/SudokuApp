import React from "react";
import Grid from "./Grid";
import Interface from "./Interface";
import Utility from "../Utility/Utility";


class Sudoku extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            grid: Utility.getEmptyGrid(),
        }

        this.puzzle = Utility.getEmptyGrid();
    }


    rebuildGrid(grid) {
        this.puzzle = Utility.getArrayCopy(grid);

        this.setState({
            grid: grid
        });
    }

    setGridValue(row, col, value) {
        var mutableGrid = this.state.grid;
        if (this.puzzle[row][col] === 0) {
            mutableGrid[row][col] = value;
            this.setState({
                grid: mutableGrid
            })
        }

    }

    render() {
        return <div>
            <Grid grid={this.state.grid} setGridValue={(row, col, value) => {
                this.setGridValue(row, col, value)
            }
            }></Grid>
            <Interface grid={this.state.grid} rebuildGrid={(grid) => {
                this.rebuildGrid(grid);
            }}></Interface>
        </div>
    }
}

export default Sudoku;