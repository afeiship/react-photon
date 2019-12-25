import Tabs from 'packages/tabs/main';
import TabItem from 'packages/tab-item/main';

export default () => {
  return (
    <div className="padded">
      <Tabs value="0" name="tabs">
        <TabItem title="tab1">
          <div className="is-bd">Body1 content1</div>
        </TabItem>
        <TabItem title="tab2">
          <div className="is-bd">Body2 content2</div>
        </TabItem>
        <TabItem title="tab3">
          <div className="is-bd">Body3 content3</div>
        </TabItem>
      </Tabs>
    </div>
  );
};
