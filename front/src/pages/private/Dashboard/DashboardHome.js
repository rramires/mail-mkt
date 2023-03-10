import React from "react";
//
import { Container } from "react-bootstrap";
//
import withRouter from '../../../shared/utils/withRouter';
//
import HeaderMenu from "../../../shared/Header/HeaderMenu";
import { PageContent } from '../../../shared/Styles/commons';
//
class DashboardHome extends React.Component{
    render(){
        return(
            <React.Fragment>
                <HeaderMenu />
                <PageContent>
                    <Container>
                        <h2>Dashboard</h2>
                    </Container>
                </PageContent>
            </React.Fragment>
        )
    }
}

export default withRouter(DashboardHome);