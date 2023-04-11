import { AbilityBuilder, createMongoAbility, PureAbility } from '@casl/ability';
import { ROLE_CLIENT, ROLE_SUPER_ADMIN } from './constant';

export type Subjects = string;
export type Actions = 'manage' | 'create' | 'read' | 'update' | 'delete';

export type AppAbility = PureAbility<[Actions, Subjects]> | undefined;

export const AppAbility = PureAbility as any;
export type ACLObj = {
    action: Actions;
    subject: string;
};

/**
 * Please define your own Ability rules according to your app requirements.
 * We have just shown Admin and Client rules for demo purpose where
 * admin can manage everything and client can just visit ACL page
 */
const defineRulesFor = (role: string, subject: string) => {
    const { can, rules } = new AbilityBuilder(createMongoAbility);

    if (role === ROLE_SUPER_ADMIN) {
        can('manage', 'all');
    } else if (role === ROLE_CLIENT) {
        can(['read'], 'acl-page');
    } else {
        can(['read', 'create', 'update', 'delete'], subject);
    }

    return rules;
};

export const buildAbilityFor = (role: string, subject: string): AppAbility => {
    return new AppAbility(defineRulesFor(role, subject), {
        detectSubjectType: (object: any) => object!.type
    });
};

export const defaultACLObj: ACLObj = {
    action: 'manage',
    subject: 'all'
};

export default defineRulesFor;
