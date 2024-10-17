<template>
  <div class="version-history">
    <h1>Software Version History</h1>
    <div v-if="loading" class="loading" v-html="loadingHTMLContent"></div>
    <div v-else>
      <LatestVersion :latestVersion="latestVersion" />
      <VersionItem :versions="versions" />
    </div>
  </div>
</template>

<script>
import VersionItem from './components/PreviousVersion.vue';
import LatestVersion from './components/LatestVersion.vue';

export default {
  components: {
    VersionItem,
    LatestVersion,
  },
  data() {
    return {
      versions: [],
      loading: true,
      latestVersion: null,
      loadingHTMLContent: 'Loading version history...',
    };
  },
  created() {
    this.fetchVersionHistory();
  },
  methods: {
    async fetchVersionHistory() {
      try {
        const response = await fetch(
          'https://raw.githubusercontent.com/leetzuhui/DuXin_Version_History/main/version_history.json',
          { cache: 'no-store' }
        );
        const data = await response.json();

        this.latestVersion = data.versions[0];
        this.versions = data.versions.slice(1).map(version => ({
          ...version,
          open: false
        }));
        this.loading = false;
      } catch (error) {
        console.error('Error loading version history:', error);
        this.loadingHTMLContent = 'Failed to load version history. Refresh to retry.';
      }
    }
  },
};
</script>

<style scoped>
.version-history {
  max-width: 75%;
  margin: 0 auto;
  padding-top: 50px;

  h1 {
    text-align: center;
  }

  .loading {
    text-align: left;
    font-size: 18px;
  }

  button {
    margin: 10px 0;
    padding: 10px;
    cursor: pointer;
  }
}
</style>
