
import { HashRouter, Route, Link } from "react-router-dom";

import styled from 'styled-components';
import Canvasif from "./Canvasif";
import CrossLine from "./CrossLine";

import Home from './Home';
import RepGen from './RepGen';
import SuperFilter from './SuperFilter';

function App() {
    return (
        <AppWrap className="App">
            <HashRouter>
                <Nav>
                    <Link to="/"><Logo /></Link>
                    <Link to="/RepGen"><NavItem>RepGen</NavItem></Link>
                    <Link to="/CrossLine"><NavItem>CrossLine</NavItem></Link>
                    <Link to="/Canvasif"><NavItem>Canvasif</NavItem></Link>
                    <Link to="/SuperFilter"><NavItem>SuperFilter</NavItem></Link>
                </Nav>
                <Route path="/" exact={true} component={Home} />
                <Route path="/RepGen" component={RepGen} />
                <Route path="/CrossLine" component={CrossLine} />
                <Route path="/Canvasif" component={Canvasif} />
                <Route path="/SuperFilter" component={SuperFilter} />
            </HashRouter>
        </AppWrap>
    );
}

const AppWrap = styled.div`
    display : flex;
    flex-direction : column;

    height : 100%;
`;

const Nav = styled.div`
    display : flex;
    align-items : center;

    padding-top : 12px;
    padding-bottom : 12px;

    padding-left : 64px;
    padding-right : 64px;

    background-color : #333333;
`;

const Logo = styled.div`
    height : 24px;
    width : 24px;

    border : 3px solid #FF625A;
`;

const NavItem = styled.span`
    margin-left : 16px;

    padding : 8px;

    font-size : 16px;
    font-weight : 400;
    color : white;

    border-radius : 8px;

    transition : 0.5s background-color;

    &:hover {
        transition : 0.5s background-color;
        background-color : #FFFFFF30;
    }
`;

export default App;
