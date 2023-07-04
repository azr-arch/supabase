export const organizationKeys = {
  list: () => ['organizations'] as const,
  detail: (slug: string | undefined) => ['organizations', slug, 'detail'] as const,
  paymentMethods: (slug: string | undefined) => ['organizations', slug, 'payment-methods'] as const,
  roles: (slug: string | undefined) => ['organizations', slug, 'roles'] as const,
  freeProjectLimitCheck: (slug: string | undefined) =>
    ['organizations', slug, 'free-project-limit-check'] as const,
  customerProfile: (slug: string | undefined) =>
    ['organizations', slug, 'customer-profile'] as const,
  auditLogs: (
    slug: string | undefined,
    {
      iso_timestamp_start,
      iso_timestamp_end,
    }: { iso_timestamp_start: string | undefined; iso_timestamp_end: string | undefined }
  ) => ['organizations', slug, 'audit-logs', { iso_timestamp_start, iso_timestamp_end }] as const,
  migrateBilling: (slug: string | undefined) => ['organizations', slug, 'migrate-billing'] as const,
  migrateBillingPreview: (slug: string | undefined) =>
    ['organizations', slug, 'migrate-billing', 'preview'] as const,
}
