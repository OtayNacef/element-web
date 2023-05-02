import type { IComponentVisibilityCustomisations } from "matrix-react-sdk/src/customisations/ComponentVisibility";
import { UIComponent,UIFeature } from "matrix-react-sdk/src/settings/UIFeature";

export const ComponentVisibilityCustomisations: IComponentVisibilityCustomisations = {
    shouldShowComponent(component) {
       return [UIComponent.InviteUsers,
        UIComponent.CreateRooms,
        UIComponent.CreateSpaces,
        UIComponent.ExploreRooms,
        UIFeature.AdvancedSettings,
        UIFeature.ShareQRCode,
        UIFeature.Deactivate,
        UIFeature.IdentityServer,
    ].includes(component) ? false : true;
    },
};
// This interface summarises all available customisation points and also marks
// them all as optional. This allows customisers to only define and export the
// customisations they need while still maintaining type safety.
export interface IComponentVisibilityCustomisations {
    shouldShowComponent?: typeof shouldShowComponent;
}

// A real customisation module will define and export one or more of the
// customisation points that make up the interface above.
export const ComponentVisibilityCustomisations: IComponentVisibilityCustomisations = {
    // while we don't specify the functions here, their defaults are described
    // in their pseudo-implementations above.
    shouldShowComponent,
};