import React, { Component } from 'react';
import { Container, Grid } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { StyledButtonTrue, StyledButtonFalse } from './style';
import { connect } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { IStore } from './reducers';

interface OwnProps {}
interface StateProps {}
interface DispatchProps {}
type Props = OwnProps & StateProps & DispatchProps;

export class App extends Component<Props> {
  private renderHeader = () => {
    return (
      <Grid
        container
        direction='row'
        justify='space-between'
        alignItems='flex-start'
      >
        <Box mt={10} fontWeight='fontWeightBold' fontSize={40}>
          <div style={{ color: '#e55fff' }}>Easy</div>
          <div style={{ color: '#2858fb' }}>Quizy</div>
        </Box>
        <Box mt={10} fontSize={20} className='txt'>
          {' '}
          Score : TODO / TODO
        </Box>
      </Grid>
    );
  };

  private renderQuestionInfo = () => {
    return (
      <Grid
        container
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '40vh' }}
      >
        <div className='txt question_number'>Question N° TODO / TODO </div>
        <div className='txt question_number'> Category TODO </div>
        <div className='txt'>
          TypeScript Quiz starter ! Ici nous devrions afficher une question !
        </div>
      </Grid>
    );
  };

  private renderButton = () => {
    return (
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='space-evenly'
      >
        <StyledButtonTrue>TRUE</StyledButtonTrue>
        <StyledButtonFalse>FALSE</StyledButtonFalse>
      </Grid>
    );
  };

  render() {
    return (
      <Container maxWidth='lg'>
        {this.renderHeader()}
        {this.renderQuestionInfo()}
        {this.renderButton()}
      </Container>
    );
  }
}

const mapStateToProps = (state: IStore): StateProps => {
  return {};
};

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
): DispatchProps => {
  return {};
};

export default connect<StateProps, DispatchProps, OwnProps, IStore>(
  mapStateToProps,
  mapDispatchToProps
)(App);
