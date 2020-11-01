// a chain of processors taking turn at one object

type Role = 'teamlead' | 'manager' | 'GM' | 'CEO';
export type Decision = 'approved' | 'rejected';
export type PurchaseApprovals = Record<Role, Decision | undefined>;

export const initialApprovals: PurchaseApprovals = {
    'CEO': undefined,
    'GM': undefined,
    'manager': undefined,
    'teamlead': undefined
};

class DecisionMaker {
    constructor(
        private purchase: PurchaseApprovals, 
        private role: Role,
        private decider: () => Decision,
    ) {}

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

        return {
            ...this.purchase,
            [this.role]: this.decider()
        };
    }
}

/*
    This is not bad but error prone, try to use "reduce" to make it more solid 
*/
export function pipeline(purchase: PurchaseApprovals, decider: () => Decision): PurchaseApprovals {
    const decidedByTeamLead = new DecisionMaker(purchase, 'teamlead', decider).decide();
    const decidedByManager = new DecisionMaker(decidedByTeamLead, 'manager', decider).decide();
    const decidedByGM = new DecisionMaker(decidedByManager, 'GM', decider).decide();
    const decidedByCEO = new DecisionMaker(decidedByGM, 'CEO', decider).decide();

    return decidedByCEO;
}

export function runPipeline() {
    return pipeline(initialApprovals, () => Math.random() > 0.5 ? 'approved' : 'rejected');
}

export function pipeline1(purchase: PurchaseApprovals, decider: () => Decision): PurchaseApprovals {
    const roles: Role[] = [ 'teamlead', 'manager', 'GM', 'CEO' ];
    return roles.reduce(
            (prev, cur) => new DecisionMaker(prev, cur, decider).decide(), 
            purchase);
}