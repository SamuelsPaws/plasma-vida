export default function nursingSlugImageMapper(slug: string): string {
    if (slug === 'adulto-mayor') {
        return 'elderly';
    }

    if (slug === 'cuidado-discapacidad') {
        return 'disability';
    }

    if (slug === 'cuidado-prehospitalario') {
        return 'prehospital';
    }

    if (slug === 'cuidado-posthospitalario') {
        return 'posthospital';
    }

    return '';
}