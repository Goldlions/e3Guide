import MDXComponents from '@theme-original/MDXComponents';

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ComponentsGrid from '../components/ComponentsGrid';
import { CardSection, Card } from '../components/CardComponents';
import * as icons from '../icons';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  ...icons,

  Tabs,
  TabItem,

  ComponentsGrid,
  CardSection,
  Card
};
