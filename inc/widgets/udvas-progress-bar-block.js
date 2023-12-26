const { registerBlockType } = wp.blocks;
const { RangeControl, TextControl } = wp.components;

registerBlockType('udvas/progress-bar', {
    title: 'Udvas Progress Bar',
    icon: 'chart-bar',
    category: 'udvas-addons', // This is the custom category name
    attributes: {
        value: {
            type: 'number',
            default: 50,
        },
        label: {
            type: 'string',
            default: 'Progress',
        },
    },
    edit: function ({ attributes, setAttributes }) {
        const { value, label } = attributes;

        return (
            <div>
                <RangeControl
                    label="Progress Value"
                    value={value}
                    onChange={(newValue) => setAttributes({ value: newValue })}
                    min={0}
                    max={100}
                />
                <TextControl
                    label="Label"
                    value={label}
                    onChange={(newLabel) => setAttributes({ label: newLabel })}
                />
            </div>
        );
    },
    save: function ({ attributes }) {
        const { value, label } = attributes;

        return (
            <div>
                <div style={{ width: `${value}%`, background: '#4CAF50', color: 'white', padding: '8px', textAlign: 'center' }}>
                    {label}
                </div>
            </div>
        );
    },
});
