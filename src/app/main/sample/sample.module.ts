import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

import { FuseSharedModule } from "@fuse/shared.module";

import { SampleComponent } from "./sample.component";

import {
    CloudinaryModule,
    CloudinaryConfiguration
} from "@cloudinary/angular-5.x";
import { Cloudinary } from "cloudinary-core";
import cloudinaryConfig from "app/cloudinary.config";

export const cloudinaryLib = {
    Cloudinary: Cloudinary
};

const routes = [
    {
        path: "sample",
        component: SampleComponent
    }
];

@NgModule({
    declarations: [SampleComponent],
    imports: [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,

        CloudinaryModule.forRoot(
            cloudinaryLib,
            cloudinaryConfig as CloudinaryConfiguration
        )
    ],
    exports: [SampleComponent]
})
export class SampleModule {}
