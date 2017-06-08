/**
 * Created by Tõnis Kasekamp on 08.06.2017.
 */

export const getBadgeClass = (subsystem) => {
    switch (subsystem) {
        case 'AOCS':
            return 'badge-default';
        case 'COM':
            return 'badge-primary';
        case 'EPS':
            return 'badge-success';
        case 'CAM':
            return 'badge-warning';
        case 'ST':
            return 'badge-info';
        case 'OBCS':
            return 'badge-danger';
        default:
            return 'badge-danger';
    }
};
