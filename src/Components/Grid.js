import React from "react";

class Grid extends React.Component {

    getGridContent(grid) {
        var rows = this.props.grid.length;
        var cols = this.props.grid[0].length;
        var gridContent = [];
        for (var i = 0; i < rows; i++) {

            for (var j = 0; j < cols; j++) {
                gridContent.push(

                    <input type="text"

                        value={grid[i][j] > 0 ? grid[i][j] : ''}

                        name={"[" + i + "][" + j + "]"}
                        key={(i * 10) + j}
                        onChange={(e) => {
                            var row = parseInt(e.target.name[1]);
                            var col = parseInt(e.target.name[4]);
                            this.props.setGridValue(row, col, parseInt(e.nativeEvent.data));
                        }} />
                )
            }
        }

        return gridContent;
    }

    render() {
        return <div className="grid">{this.getGridContent(this.props.grid)}</div>
    }
}

export default Grid;