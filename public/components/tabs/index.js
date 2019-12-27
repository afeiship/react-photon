import Tabs from 'packages/tabs/main';
import TabItem from 'packages/tab-item/main';
import Window from 'packages/window/main';
import WindowContent from 'packages/window-content/main';
import ToolbarHeader from 'packages/toolbar-header/main';
import Container from 'root/public/components/layout/container';
import Property from 'root/public/components/layout/property';

export default () => {
  const items = [
    {
      property: 'className',
      type: 'String',
      default: '-',
      description: 'Extended class name for component.'
    }
  ];

  return (
    <Container>
      <Property items={items} />
      <Window relative>
        <ToolbarHeader title="Header with tabs" />
        <WindowContent>
          <Tabs value="0" name="tabs" style={{ flex: 1 }}>
            <TabItem title="tab1">
              <div className="padded-more">
                <p>道可道，非常道；名可名，非常名。 无名，天地之始，有名，万物之母。</p>
                <p>故常无欲，以观其妙，常有欲，以观其徼。</p>
                <p>此两者，同出而异名，同谓之玄，玄之又玄，众妙之门。</p>
              </div>
            </TabItem>
            <TabItem title="tab2">
              <div className="padded-more">
                <p>天下皆知美之为美，斯恶已，皆知善之为善，斯不善已。</p>
                <p>故有无相生，难易相成，长短相形，高下相倾，音声相和，前后相随。</p>
                <p>
                  是以圣人处无为之事，行不言之教，万物作焉而不辞，生而不有，为而不恃，功成而弗居。
                </p>
                <p>夫惟弗居，是以不去。</p>
              </div>
            </TabItem>
            <TabItem title="tab3">
              <div className="padded-more">
                <p>不尚贤，使民不争；不贵难得之货，使民不为盗；不见可欲，使民心不乱。</p>
                <p>
                  是以圣人之治，虚其心，实其腹，弱其志，强其骨，常使民无知无欲。 使夫知者不敢为也。
                </p>
                <p>为无为，则无不治。</p>
              </div>
            </TabItem>
          </Tabs>
        </WindowContent>
      </Window>
    </Container>
  );
};
