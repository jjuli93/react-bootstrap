import React from 'react';
import { SpinnerProps } from 'react-spinkit';

import Loading from './components/loading';

interface Props extends SpinnerProps {
  loading: boolean;
}

export const withSpinner = ({ loading, ...spinnerProps }: Props) =>
  loading ? <Loading {...spinnerProps} /> : <p>not loading</p>;
