// a chain of processors taking turn at one object

type Role = 'teamlead' | 'manager' | 'GM' | 'CEO';
type Decision = 'approved' | 'rejected';
type PurchaseApprovals = Record<Role, Decision | undefined>;

const initialApprovals: PurchaseApprovals = {
    'CEO': undefined,
    'GM': undefined,
    'manager': undefined,
    'teamlead': undefined
};

class DecisionMaker {
    constructor(private purchase: PurchaseApprovals, private role: Role) {}

    // check all roles approve of the purchase
    approvedBy(...roles: Role[]): boolean {
        return true;
    }

    decide(): PurchaseApprovals {
        switch (this.role) {
            case 'CEO': 
                if (!this.approvedBy('GM', 'manager', 'teamlead')) {
                    return this.purchase;
                }
                break;
            case 'GM':
                if (!this.approvedBy('manager', 'teamlead')) {
                    return this.purchase;
                }
                break;
            case 'manager':
                if (!this.approvedBy('teamlead')) {
                    return this.purchase;
                }
                break;
        }

        const decision: Decision = Math.random() > 0.5 ? 'rejected' : 'approved';
        return {
            ...this.purchase,
            [this.role]: decision
        };
    }
}

/*
    This is not bad but error prone, try to use "reduce" to make it safer 
*/
export function pipeline(): PurchaseApprovals {
    const purchase = initialApprovals;
    const decidedByTeamLead = new DecisionMaker(purchase, 'teamlead').decide();
    const decidedByManager = new DecisionMaker(decidedByTeamLead, 'manager').decide();
    const decidedByGM = new DecisionMaker(decidedByManager, 'GM').decide();
    const decidedByCEO = new DecisionMaker(decidedByGM, 'CEO').decide();

    return decidedByCEO;
}