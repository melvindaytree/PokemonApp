# Mobile Release Process short version

### \[updated June 16 2022 ] After Release Steps

( We are now doing the release cut the same day after the apps are sent for app store review. Discussion thread and reason behind this decision - [Slack](https://yieldstreet.slack.com/archives/GTFFLMVF0/p1654012027755909))

* notify about the cut in [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH), e.g:
  * `@here cutting mobile v3.xx`
* run cluster-workflow-templates
  * Menu “yieldstreet-pod-release-cut” and add the correct `RELEASE_LABEL`
* Verify build log to check if all cards were tagged correctly
* Update [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH) channel topic with, e.g:
  * `Mobile PRD=3.xx REL=3.xy | TGT WeekDay. month/day | Shortcut link` [`https://app.shortcut.com/yieldstreet/label/:id`](https://app.shortcut.com/yieldstreet/label/:id)
* After running the job, go to your local `develop` branch inside the `/ios folder` and run:
* `fastlane update_app_version`
  * Check if the command above worked properly, it should update dev branch with new version number
* notify about the cut finish in [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH), e.g:
  * `@here Mobile release 3.xx has been cut, please verify your cards.` [`https://app.shortcut.com/yieldstreet/label/:id`](https://app.shortcut.com/yieldstreet/label/:id) `cc @TERM`
* Update [schedule](https://app.nuclino.com/Yieldstreet/Yieldstreet-Intranet/Mobile-Release-Schedule-f36df77a-d5cd-4980-ab3d-6805c4bb2ec0)

### Release Day Steps - CHECKLIST

* Verified tag on all features and all in Ready for Deploy
* Wait regression from QA team and verified fixes for all blockers
* Check/ask release notes at [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH).
  * `` @pm any updates to the mobile release notes?` ``
  * We use [release notes doc](https://docs.google.com/document/d/1E89dujogNzy41Hmz1BgboH785I4hm8b4Jx5DsOUPHKs/edit) for this
* notify release start in [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH)
  * `@here starting mobile release v3.xx`
* Pull the latest versions of release and master
  * Update `ios/fastlane/metadata/en_US/release_notes.txt` with [release notes doc](https://docs.google.com/document/d/1E89dujogNzy41Hmz1BgboH785I4hm8b4Jx5DsOUPHKs/edit)
  * Update `ios/fastlane/metadata/en_US/description.txt` with [app store doc](https://docs.google.com/document/d/1repnhePS4RfMdzEbjc1B15BDox1eWede6uWY1SLew2I)
* Create a pr labeled with the new version number merging release into master
  * this will trigger a [Bitrise](https://app.bitrise.io/dashboard) job
* When [Bitrise](https://app.bitrise.io/dashboard) android and ios job are finished
  * Check if the app is available on [TestFlight](https://appstoreconnect.apple.com/apps/1437754463/testflight/ios)
  * notify in [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH), and [#mobile-smoking-testing](https://yieldstreet.slack.com/archives/C031D2PMFSA) e.g:
    * `@here android and ios are available for internal testing` OR
    * `@alex @Hrishi @Sylvain (h/h) - android and ios are available for internal testing`
    * Download .apk file from Bitrise/build/Apps\&Artifacts tab and attach to the thread

### After team greenlight

#### Android steps - [on Google Play Console](https://play.google.com/console/u/1/developers/6863995945596646488/app/4972485212853738115/app-dashboard?timespan=thirtyDays)

* Update release notes on
  * Menu Testing
    * Internal testing
      * View release details
        * Edit release details, should match [release notes doc](https://docs.google.com/document/d/1E89dujogNzy41Hmz1BgboH785I4hm8b4Jx5DsOUPHKs)
* Update app description
  * Grow (left menu) > Store presence > Menu Store Presence
    * Main Store listing
      * Edit Full description, should match [app store doc](https://docs.google.com/document/d/1repnhePS4RfMdzEbjc1B15BDox1eWede6uWY1SLew2I)

#### Apple steps - [on App Store](https://appstoreconnect.apple.com/apps/1437754463/appstore/ios/version/inflight)

* Update release notes on
  * App Store tab
    * Input “What’s New in This Version” should match [release notes doc](https://docs.google.com/document/d/1E89dujogNzy41Hmz1BgboH785I4hm8b4Jx5DsOUPHKs)
    * Input “Description” should match [app store doc](https://docs.google.com/document/d/1repnhePS4RfMdzEbjc1B15BDox1eWede6uWY1SLew2I)
    * This is where you can also modify keywords
    * On Build section, select the right build version
    * Save!

### After double check all steps above

* [on App Store](https://appstoreconnect.apple.com/apps/1437754463/appstore/ios/version/inflight)
  * Submit for review
* [on Google Play Console](https://play.google.com/console/u/1/developers/6863995945596646488/app/4972485212853738115/app-dashboard?timespan=thirtyDays)
  * Menu Testing
    * Internal testing
      * Promote release
        * Production
* [Create a github tag](https://github.com/yieldstreet/mole/releases/new)
  * Release title: v3.xx
  * Description: [https://app.shortcut.com/yieldstreet/label/:id](https://app.shortcut.com/yieldstreet/label/:id)
* Notify team in [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH)
  * `@here mobile v3.xx is waiting for review in both stores`
* Update [#release-management](https://yieldstreet.slack.com/archives/CMVER3WHH) channel topic with, e.g:
  * `Mobile PRD=3.xx REL=3.xy | TGT WeekDay. month/day | Shortcut link` [`https://app.shortcut.com/yieldstreet/label/:id`](https://app.shortcut.com/yieldstreet/label/:id)
* Submit the [CHECKLIST](https://docs.google.com/forms/d/e/1FAIpQLSeO9jC56iTzFMqmoOKxoCIAUIPKvfZSsKxnsENJiefj8GQKjw/viewform?edit\_requested=true)
* Archive the Shortcut label
* Update [schedule](https://app.nuclino.com/Yieldstreet/Yieldstreet-Intranet/Mobile-Release-Schedule-f36df77a-d5cd-4980-ab3d-6805c4bb2ec0)
