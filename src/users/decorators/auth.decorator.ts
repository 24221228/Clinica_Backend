import { AuthGuard } from "@nestjs/passport";
import { UseGuards, applyDecorators } from "@nestjs/common";
import { UserRolGuard } from "../guards/user-rol.guard";
import { RoleProtected } from "./role-protected.decorator";
import { ValidRoles } from "../interfaces/valid-roles";

export function Auth(...roles: ValidRoles[]){
    return applyDecorators(
        RoleProtected(...roles),
        UseGuards(AuthGuard(), UserRolGuard),
    )
}