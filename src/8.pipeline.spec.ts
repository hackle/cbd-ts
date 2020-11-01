import { Decision, initialApprovals, pipeline, PurchaseApprovals } from './8.pipeline';

describe('Pipeline', () => {
    [
        {
            scenario: 'all proves',
            purchase: initialApprovals,
            decider: () => 'approved' as Decision,
            expected: <PurchaseApprovals>{
                teamlead: 'approved',
                manager: 'approved',
                GM: 'approved',
                CEO: 'approved'
            },
        },
        {
            scenario: 'all rejects',
            purchase: initialApprovals,
            decider: () => 'rejected' as Decision,
            expected: <PurchaseApprovals>{
                teamlead: 'rejected',
                manager: 'rejected',
                GM: 'rejected',
                CEO: 'rejected'
            },
        }
    ].forEach(testcase => it(testcase.scenario, () => {
        const actual = pipeline(testcase.purchase, testcase.decider);

        expect(actual).toEqual(testcase.expected);
    }));
});