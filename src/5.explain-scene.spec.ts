import { explain, Scene } from "./5.explain-scene";

describe('explain scene', () => {
    [
        {
            scenario: 'Family greeting',
            scene: {
                'action': 'greeting',
                'person1': 'Mary',
                'person2': 'John',
                'place': 'home'
            } as Scene,
            expected: 'Mary gives John a bear hug'
        },
        {
            scenario: 'Family disagreement',
            scene: {
                'action': 'disagreement',
                'person1': 'Mary',
                'person2': 'John',
                'place': 'home'
            } as Scene,
            expected: 'Mary shouts to John: I hate you!'
        },
        {
            scenario: 'Workplace greeting',
            scene: {
                'action': 'greeting',
                'person1': 'Mary',
                'person2': 'John',
                'place': 'office'
            } as Scene,
            expected: 'Mary shares a firm hand-shake with John'
        },
        {
            scenario: 'Workplace disagreement',
            scene: {
                'action': 'disagreement',
                'person1': 'Mary',
                'person2': 'John',
                'place': 'office'
            } as Scene,
            expected: 'Mary addresses John: I beg to differ'
        },
    ].forEach(testcase => it(testcase.scenario, () => {
        const actual = explain(testcase.scene);

        expect(actual).toEqual(testcase.expected);
    }));
});