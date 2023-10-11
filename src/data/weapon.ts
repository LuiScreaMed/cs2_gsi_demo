/**
 * Weapon Interface
 *
 * 武器接口
 */
export interface Weapon {
    name: string,
    paintkit: string | "default",
    type?: WeaponType,
    ammo_clip_max?: number,
    ammo_reserve?: number,
    ammo_clip?: number,
    state: WeaponState
}

/**
 * Weapon state
 *
 * 武器状态
 */
export type WeaponState = "active" | "holstered";

/**
 * Weapon type
 *
 * 武器类型
 */
export type WeaponType = "Knife" | "Pistol" | "Submachine Gun" | "Shotgun" | "Grenade" | "Rifle" | "Machine Gun" | "SniperRifle";