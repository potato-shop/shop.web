<template>
  <div class="profile__edit-modal">
    <!-- Modal -->
    <div
      class="modal fade"
      id="profile_edit_modal"
      tabindex="-1"
      aria-labelledby="profile_edit_modal"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="profile__edit-wrapper">
            <div class="profile__edit-close">
              <button type="button" class="profile__edit-close-btn" data-bs-dismiss="modal">
                <i class="fa fa-times"></i>
              </button>
            </div>
            <profile-edit-form />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProfileEditForm from '../../forms/ProfileEditForm.vue';
</script>
