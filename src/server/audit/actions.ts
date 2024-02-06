export const AUDIT_ACTIONS = {
  user: ["signed-up", "onboarded"],
  company: ["created"],
  stakeholder: [
    "invited",
    "re-invited",
    "accepted",
    "updated",
    "removed",
    "revoked-invite",
    "deactivated",
    "activated",
  ],
} as const;