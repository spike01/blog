<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into your Astro (View Transitions) blog. The following changes were made:

- **`src/components/posthog.astro`** (new): PostHog initialization snippet with `window.__posthog_initialized` guard to prevent stack overflow during soft navigation. Uses `capture_pageview: 'history_change'` for automatic pageview tracking. Also contains event delegation for external link tracking.
- **`src/layouts/PageLayout.astro`**: Imports and renders `<PostHog />` inside `<head>`, so analytics loads on every page.
- **`src/components/Link.astro`**: External links gain `data-ph-capture` and `data-ph-url` attributes, picked up by the delegation listener in the PostHog component.
- **`src/pages/blog/[...slug].astro`**: Fires `blog_post_viewed` (with `title` and `slug` properties) on `astro:page-load`.
- **`src/pages/projects/[...slug].astro`**: Fires `project_viewed` (with `title` and `slug` properties) on `astro:page-load`.
- **`.env`** (new): `PUBLIC_POSTHOG_PROJECT_TOKEN` and `PUBLIC_POSTHOG_HOST` set via environment variables.

| Event | Description | File |
|---|---|---|
| `external_link_clicked` | User clicked an external link (social media, project demo, or repo URL) | `src/components/Link.astro` + `src/components/posthog.astro` |
| `blog_post_viewed` | User opened a blog post — top of reading funnel | `src/pages/blog/[...slug].astro` |
| `project_viewed` | User opened a project detail page | `src/pages/projects/[...slug].astro` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/1575907)
- [Blog post views over time](/insights/FU1NySOF)
- [Project page views over time](/insights/ZYDVixq9)
- [External link clicks over time](/insights/B3H6oCI1)
- [Top blog posts by views](/insights/WPq65xyr)
- [Top external links clicked](/insights/NtmMeCR0)

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
