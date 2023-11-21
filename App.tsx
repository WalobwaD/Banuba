import * as React from 'react';
import BanubaSdkManager, { EffectPlayerView } from '@banuba/react-native';

export default class App extends React.Component {
  ep: any;

  constructor(props: {} | Readonly<{}>) {
    super(props);
    BanubaSdkManager.initialize(
      [],
      "Q/O7yBCVz4v4AMopPMO4aTRKfl6KoEI4M7W1GH3HmBnIrkvZ5UFkfyXBArfdDPJ+ruILLhDjOrIbQji4RQLoFqZ6zIvTZOOVAcdrM/qGgzdNiv1jLHq12mexlUOOm7mxDBeuccYFsN5AggiYDzhEQAD42AxMTvFOvMP+3tmO8h9yOzUbFjK4AlOFL0jWE703NrxoOfEsu9ffed3g3CnOYFIsK1D8QbrtWUOPzi3SqxG6Ta1ojtf/P8MBtoxZp2Pp2Hs/r+Id2/7WwqUx4N3+g75l5B1UwBsQv73urcNXlx4AeW+3p5opSq9L4TGg0+ZrRBvzffK5uUkZyaDTNmyca7Bxn4Xq9RAcNUtdijPckDB9Z1kGxCTsnEtYif1xEk0tEfAfowi5yzbo7N2XajwXILQu8/PoWZ3nRxZ4o59cfcl41AIOhwmc0o7Tek5pHZ/RI1/ArbVAGuHmMpNm0QY2y9Lrtlpw286nxmwIO+s+8kum6Ax3U2bGQC44jP0Et1EWRicHV4Fs51exQuTf2CqNKLXWayhmZF1ZNp8WEw==",
    );
    this.ep = React.createRef<typeof EffectPlayerView>();
  }

  render(): React.ReactNode {
    return <EffectPlayerView style={{ flex: 1 }} ref={this.ep} />;
  }

  componentDidMount(): void {
    BanubaSdkManager.attachView(this.ep.current._nativeTag);
    BanubaSdkManager.openCamera();
    BanubaSdkManager.startPlayer();
    BanubaSdkManager.loadEffect('effects/TrollGrandma');
  }

  componentWillUnmount(): void {
    BanubaSdkManager.stopPlayer();
  }
}
