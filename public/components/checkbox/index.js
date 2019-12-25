import Checkbox from 'packages/checkbox/main';

export default () => {
  return (
    <div className="padded">
      <Checkbox
        name="checkbox"
        onChange={(e) => {
          console.log('value:', e.target.value);
        }}
        label=" This is a checkbox"
      />
    </div>
  );
};
