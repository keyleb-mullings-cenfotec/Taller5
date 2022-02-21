import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

class Table extends React.Component {

    render() {
        const {characters} = this.props;
        return (
            <div>
                <table>
                    <TableHeader />
                    <TableBody characters={characters} />
                </table>
                <hr />
                <table>
                    <TableHeader />
                    <TableBody characters={characters} />
                </table>
            </div>
        );
    }
}

export default Table;
